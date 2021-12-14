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

export default function BasicUsage({
  isOpen,
  onClose,
  imgUrl,
  handleUpdateImg,
}) {
  const imgRef = useRef(null)
  const previewCanvasRef = useRef(null)
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 1 / 1 })
  const [completedCrop, setCompletedCrop] = useState(null)
  const [croppedImgUrl, setCroppedImgUrl] = useState("")

  const onLoad = useCallback((img) => {
    imgRef.current = img
  }, [])

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return
    }

    const image = imgRef.current
    const canvas = previewCanvasRef.current
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
          <ModalHeader>Chỉnh sửa hình ảnh sản phẩm</ModalHeader>
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
                <Text textAlign={"center"}>Xem trước</Text>
                <Image src={croppedImgUrl} />
                <div h="6rem" w="6rem" style={{ display: "none" }}>
                  <canvas
                    ref={previewCanvasRef}
                    style={{
                      width: Math.round(completedCrop?.width ?? 0),
                      height: Math.round(completedCrop?.height ?? 0),
                    }}
                  />
                </div>
              </GridItem>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              colorScheme="teal"
              onClick={() => {
                handleUpdateImg(croppedImgUrl)
                onClose()
              }}
            >
              Lưu
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
