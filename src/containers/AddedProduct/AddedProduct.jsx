import {
  Button,
  Checkbox,
  GridItem,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react"
import QuantityInputWithDialog from "components/Input/QuantityInputWithDialog"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { updateQuantity, removeProduct } from "store/slices/cartSlice"
import _ from "lodash"
import { Link } from "react-router-dom"
import replacePathFmt from "components/TabPanel/AllProductsTabPanel/helpers"
import { Routes } from "routes/Routes"
import { useTranslation } from "react-i18next"

export default function AddedProduct({
  id,
  product,
  handleUpdateQty,
  isItemSelected,
  onSelect,
  onDelete,
}) {
  const [qty, setQty] = useState(product.qty)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const handleDeleteProduct = (productId) => () => {
    onDelete(productId)
    dispatch(removeProduct({ id: productId }))
  }

  useEffect(() => {
    dispatch(updateQuantity({ productId: product.id, qty: qty }))
    handleUpdateQty(id, qty)
  }, [qty])

  return (
    <>
      <GridItem colSpan={4}>
        <HStack>
          <Checkbox
            colorScheme={"teal"}
            name={String(id)}
            isChecked={isItemSelected}
            onChange={onSelect(product.id)}
          />
          <Image w="4rem" h="4rem" src={product.pictureUrl} />
          <Link
            to={replacePathFmt(
              Routes.home.routes.productDetail.path,
              product.id
            )}
          >
            <Text
              _hover={{ textDecoration: "underline", color: "teal.400" }}
              fontSize="sm"
              noOfLines={2}
              width={200}
            >
              {product.name}
            </Text>
          </Link>
        </HStack>
      </GridItem>
      <GridItem>
        <HStack>
          <Text as="s">₫{product.price}</Text>
          <Text color="tomato">₫{product.discountPrice}</Text>
        </HStack>
      </GridItem>
      <GridItem>
        <QuantityInputWithDialog
          handleChangeQty={setQty}
          defaultValue={qty}
          productId={product.id}
        />
      </GridItem>
      <GridItem textAlign={"center"} color={"tomato"}>
        <Text>₫{_.ceil(product.discountPrice * product.qty, 2)}</Text>
      </GridItem>
      <GridItem textAlign={"center"}>
        <Button variant={"ghost"} onClick={handleDeleteProduct(product.id)}>
          {t("cart.deleteBtn")}
        </Button>
      </GridItem>
    </>
  )
}
