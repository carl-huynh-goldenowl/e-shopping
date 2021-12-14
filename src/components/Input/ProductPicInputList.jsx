import React, { useState, useCallback, useEffect } from "react"
import {
  Center,
  SimpleGrid,
  GridItem,
  Input,
  VStack,
  Text,
  IconButton,
  HStack,
  Image,
  useDisclosure,
} from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"
import {
  MdOutlineAddCircleOutline,
  MdOutlineCrop,
  MdDeleteOutline,
} from "react-icons/md"
import { useDropzone } from "react-dropzone"

import { AiOutlineLine } from "react-icons/ai"
import CropImageModal from "../Modal/CropImageModal"

export function ProductPicInput({ title, inputId }) {
  const [productImg, setProductImg] = useState(null)
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext()

  const onDrop = useCallback((acceptedFiles) => {
    setProductImg(URL.createObjectURL(acceptedFiles[0]))
    setValue(inputId, URL.createObjectURL(acceptedFiles[0]))
  }, [])

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    maxFiles: 1,
    onDrop,
  })
  const [isDisplayed, setIsDisplayed] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleUpdateImg = (croppedImgUrl) => {
    setProductImg(croppedImgUrl)
  }

  const handleDeleteImgFile = () => {
    acceptedFiles.pop()
    setProductImg(null)
    setValue(inputId, null)
  }

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setValue(inputId, productImg)
    }
  }, [acceptedFiles])

  return (
    <VStack>
      <input
        type="file"
        {...register(inputId, {
          required: "Ảnh bìa không được để trống.",
          validate: (value) => value != null,
        })}
        hidden
      />
      {acceptedFiles.length > 0 ? (
        <Center
          w="6rem"
          h="6rem"
          position={"relative"}
          onMouseEnter={() => setIsDisplayed(true)}
          onMouseLeave={() => setIsDisplayed(false)}
          border="1px solid teal"
        >
          <Image objectFit="cover" src={productImg} />

          {isDisplayed && (
            <HStack
              position={"absolute"}
              bottom="0"
              bg="teal.300"
              w="100%"
              justifyContent={"space-around"}
              p="0.5rem"
              alignItems={"center"}
              color="white"
            >
              <MdOutlineCrop cursor="pointer" onClick={onOpen} />
              <AiOutlineLine transform="rotate(90)" />
              <MdDeleteOutline cursor="pointer" onClick={handleDeleteImgFile} />
            </HStack>
          )}
        </Center>
      ) : (
        <div {...getRootProps({ className: "dropzone" })}>
          <Input {...getInputProps()} />
          <IconButton h="6rem" w="6rem">
            <MdOutlineAddCircleOutline />
          </IconButton>
        </div>
      )}

      <Text>{title}</Text>
      <CropImageModal
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={
          acceptedFiles.length > 0 ? URL.createObjectURL(acceptedFiles[0]) : ""
        }
        handleUpdateImg={handleUpdateImg}
      />
      {errors.mainImg && <Text color="red.500">{errors.mainImg?.message}</Text>}
    </VStack>
  )
}

export default function ProductPicInputList() {
  return (
    <SimpleGrid justifyContent={"flex-start"} columns={12} spacingY={6}>
      <GridItem colSpan={[6, 4, 3, 2]}>
        <ProductPicInput title="Ảnh bìa" index={0} inputId="mainImg" />
      </GridItem>
      {Array(8)
        .fill(0)
        .map((item, index) => (
          <GridItem key={index} colSpan={[6, 4, 3, 2]}>
            <ProductPicInput
              title={`Ảnh ${index + 1}`}
              index={index + 1}
              inputId={`detailImgs${index + 1}`}
            />
          </GridItem>
        ))}
    </SimpleGrid>
  )
}
