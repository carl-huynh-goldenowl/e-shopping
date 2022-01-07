import { GridItem, HStack, Image, Text } from "@chakra-ui/react"
import React from "react"
import _ from "lodash"
import { Link } from "react-router-dom"
import replacePathFmt from "components/TabPanel/AllProductsTabPanel/helpers"
import { Routes } from "routes/Routes"

export default function AddedProduct({
  id,
  name,
  pictureUrl,
  discountPrice,
  qty,
}) {
  return (
    <>
      <GridItem colSpan={5}>
        <HStack>
          <Image w="4rem" h="4rem" src={pictureUrl} />
          <Link to={replacePathFmt(Routes.home.routes.productDetail.path, id)}>
            <Text
              _hover={{ textDecoration: "underline", color: "teal.400" }}
              fontSize="sm"
              noOfLines={2}
              width={200}
            >
              {name}
            </Text>
          </Link>
        </HStack>
      </GridItem>
      <GridItem>
        <Text color="tomato">₫{discountPrice}</Text>
      </GridItem>
      <GridItem textAlign={"center"}>
        <Text>{qty}</Text>
      </GridItem>
      <GridItem textAlign={"right"} color={"tomato"}>
        <Text>₫{_.ceil(discountPrice * qty, 2)}</Text>
      </GridItem>
    </>
  )
}
