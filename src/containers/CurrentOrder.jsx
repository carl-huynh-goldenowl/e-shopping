import React, { useCallback } from "react"
import {
  Button,
  Checkbox,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCheckedProduct } from "store/slices/cartSlice"

export default function CurrentOrder({
  handleCheckAll,
  checkAll,
  isIndeterminate,
  cartLenght,
  total,
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()
  const dispatch = useDispatch()

  const checkedProductList = useSelector(
    (state) => state.cart.checkedProductList
  )

  let length = 0
  checkedProductList.forEach((product) => {
    if (product.isChecked) length += 1
  })

  const handleOpenDialog = useCallback(() => {
    if (length > 0) {
      setIsOpen(true)
    }
  }, [setIsOpen, length])

  const handleDeleteCheckedProduct = () => {
    setIsOpen(false)
    dispatch(deleteCheckedProduct(checkedProductList))
  }

  return (
    <>
      <SimpleGrid
        columns={12}
        bg="white"
        rounded="md"
        shadow="xl"
        p="1rem"
        alignItems={"center"}
      >
        <GridItem colSpan={2}>
          <Checkbox
            colorScheme={"teal"}
            onChange={handleCheckAll}
            isChecked={checkAll}
            isIndeterminate={isIndeterminate}
          >
            Chọn tất cả ({cartLenght})
          </Checkbox>
        </GridItem>
        <GridItem colSpan={4}>
          <Button
            variant={"ghost"}
            colorScheme={"teal"}
            onClick={handleOpenDialog}
          >
            Xóa
          </Button>
        </GridItem>
        <GridItem colSpan={4}>
          <HStack>
            <Text>Tổng thanh toán:</Text>
            <Text color="tomato" fontSize="2xl">
              {total}
            </Text>
          </HStack>
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            style={{ width: "100%" }}
            variants={"primary"}
            colorScheme={"teal"}
          >
            Mua hàng
          </Button>
        </GridItem>
      </SimpleGrid>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Xóa sản phẩm
            </AlertDialogHeader>

            <AlertDialogBody>
              Bạn có chắc chắn muốn xóa {length} sản phẩm này không?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Hủy
              </Button>
              <Button
                colorScheme="red"
                onClick={handleDeleteCheckedProduct}
                ml={3}
              >
                Xóa
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
