import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react"
import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeProduct } from "store/slices/cartSlice"
import { setIsOpenDeleteProductDialog } from "store/slices/deleteProductSlice"

export default function DeleteProductAlertDialog() {
  const deleteProduct = useSelector((state) => state.deleteProduct)
  const dispatch = useDispatch()
  const cancelRef = React.useRef()

  const onClose = useCallback(() => {
    dispatch(setIsOpenDeleteProductDialog(false))
  }, [dispatch])

  const handleDeleteProduct = useCallback(() => {
    dispatch(removeProduct({ id: deleteProduct.productId }))
    dispatch(setIsOpenDeleteProductDialog(false))
  }, [dispatch, deleteProduct.productId])

  return (
    <AlertDialog
      isOpen={deleteProduct.isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Xóa sản phẩm {deleteProduct.id}
          </AlertDialogHeader>

          <AlertDialogBody>
            Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Hủy
            </Button>
            <Button colorScheme="red" onClick={handleDeleteProduct} ml={3}>
              Xóa
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
