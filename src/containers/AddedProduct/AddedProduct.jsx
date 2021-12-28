import {
  Button,
  Checkbox,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import QuantityInput from "components/Input/QuantityInput"
import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { updateQuantity, removeProduct } from "store/slices/cartSlice"
import _ from "lodash"
import { Link } from "react-router-dom"
import replacePathFmt from "components/TabPanel/AllProductsTabPanel/helpers"
import { Routes } from "routes/Routes"

export default function AddedProduct({
  id,
  product,
  checked,
  onClickCheckBoxItem,
}) {
  const [qty, setQty] = useState(product.qty)
  const dispatch = useDispatch()
  const handleDeleteProduct = useCallback(
    (productId) => () => {
      dispatch(removeProduct({ id: productId }))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(updateQuantity({ productId: product.id, qty: qty }))
  }, [qty])

  return (
    <SimpleGrid
      columns={8}
      bg="white"
      rounded="md"
      shadow="xl"
      p="1rem"
      spacing={3}
      alignItems={"center"}
    >
      <GridItem colSpan={4}>
        <HStack>
          <Checkbox
            colorScheme={"teal"}
            name={String(id)}
            isChecked={checked}
            onChange={onClickCheckBoxItem}
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
        <QuantityInput handleChangeQty={setQty} defaultValue={qty} />
      </GridItem>
      <GridItem textAlign={"center"} color={"tomato"}>
        <Text>₫{_.ceil(product.discountPrice * product.qty, 2)}</Text>
      </GridItem>
      <GridItem textAlign={"center"}>
        <Button variant={"ghost"} onClick={handleDeleteProduct(product.id)}>
          Xóa
        </Button>
      </GridItem>
    </SimpleGrid>
  )
}
