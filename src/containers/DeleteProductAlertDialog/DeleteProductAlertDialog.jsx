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
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { removeProduct } from "store/slices/cartSlice"
import { setIsOpenDeleteProductDialog } from "store/slices/deleteProductSlice"

export default function DeleteProductAlertDialog() {
  const deleteProduct = useSelector((state) => state.deleteProduct)
  const dispatch = useDispatch()
  const cancelRef = React.useRef()
  const { t } = useTranslation()

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
            {t("cart.deleteProduct")} {deleteProduct.id}
          </AlertDialogHeader>

          <AlertDialogBody>{t("cart.alertDelect")}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {t("cart.cancelBtn")}
            </Button>
            <Button colorScheme="red" onClick={handleDeleteProduct} ml={3}>
              {t("cart.deleteBtn")}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
