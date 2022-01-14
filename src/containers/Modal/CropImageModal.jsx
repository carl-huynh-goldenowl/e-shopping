import React, { useEffect, useState, useRef, useCallback } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  SimpleGrid,
  GridItem,
  Text,
  Image,
} from "@chakra-ui/react"
import ReactCrop from "react-image-crop"
import "react-image-crop/dist/ReactCrop.css"
import { useTranslation } from "react-i18next"

export default function BasicUsage({
  isOpen,
  onClose,
  imgUrl,
  handleUpdateImg,
}) {
  const imgRef = useRef(null)
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 1 / 1 })
  const [completedCrop, setCompletedCrop] = useState(null)
  const [croppedImgUrl, setCroppedImgUrl] = useState("")
  const { t } = useTranslation()

  const onLoad = useCallback((img) => {
    imgRef.current = img
  }, [])

  useEffect(() => {
    if (!completedCrop || !imgRef.current) {
      return
    }

    const image = imgRef.current
    const canvas = document.createElement("canvas")
    const crop = completedCrop

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    const ctx = canvas.getContext("2d")
    const pixelRatio = window.devicePixelRatio

    canvas.width = crop.width * pixelRatio * scaleX
    canvas.height = crop.height * pixelRatio * scaleY

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    ctx.imageSmoothingQuality = "high"

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    )

    const result = new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"))
          return
        }
        blob.name = imgUrl
        resolve(URL.createObjectURL(blob))
      }, "image/jpeg")
    })
    result.then((r) => {
      setCroppedImgUrl(r)
    })
  }, [completedCrop])

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {t("productsManagement.addProductForm.editProductPicture")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={12} spacing={3}>
              <GridItem colSpan={8}>
                <ReactCrop
                  src={imgUrl}
                  onImageLoaded={onLoad}
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  onComplete={(c) => setCompletedCrop(c)}
                />
              </GridItem>
              <GridItem colSpan={4}>
                <Text textAlign={"center"}>
                  {t("productsManagement.addProductForm.preview")}
                </Text>
                <Image src={croppedImgUrl} />
              </GridItem>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              {t("productsManagement.addProductForm.closeBtn")}
            </Button>
            <Button
              variant="ghost"
              colorScheme="teal"
              onClick={() => {
                handleUpdateImg(croppedImgUrl)
                onClose()
              }}
            >
              {t("productsManagement.addProductForm.saveBtn")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
