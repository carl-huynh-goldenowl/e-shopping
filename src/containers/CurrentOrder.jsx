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
import { useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"
import { useTranslation } from "react-i18next"

export default function CurrentOrder({
  onSelectAll,
  isSelectedAll,
  isIndeterminate,
  cartLenght,
  total,
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const checkedProductList = useSelector(
    (state) => state.cart.checkedProductList
  )

  const handleOpenDialog = useCallback(() => {
    if (checkedProductList.length > 0) {
      setIsOpen(true)
    }
  }, [setIsOpen, checkedProductList.length])

  const handleDeleteCheckedProduct = () => {
    setIsOpen(false)
    dispatch(deleteCheckedProduct(checkedProductList))
  }

  const onCheckout = useCallback(() => {
    navigate(Routes.checkout.path)
  })

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
            onChange={onSelectAll}
            isChecked={isSelectedAll}
            isIndeterminate={isIndeterminate}
          >
            {t("cart.selectAll")} ({cartLenght})
          </Checkbox>
        </GridItem>
        <GridItem colSpan={4}>
          <Button
            variant={"ghost"}
            colorScheme={"teal"}
            onClick={handleOpenDialog}
            disabled={checkedProductList.length > 0 ? false : true}
          >
            {t("cart.deleteBtn")}
          </Button>
        </GridItem>
        <GridItem colSpan={4}>
          <HStack>
            <Text>{t("orderDetail.totalPayment")}:</Text>
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
            onClick={onCheckout}
          >
            {t("cart.purchase")}
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
              {t("cart.deleteProduct")}
            </AlertDialogHeader>

            <AlertDialogBody>
              {t("cart.deleteProducts", { count: checkedProductList.length })}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {t("cart.cancelBtn")}
              </Button>
              <Button
                colorScheme="red"
                onClick={handleDeleteCheckedProduct}
                ml={3}
              >
                {t("cart.deleteBtn")}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
