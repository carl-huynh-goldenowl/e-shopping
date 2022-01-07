import { GridItem, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react"
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
      <SimpleGrid
        columns={8}
        bg="white"
        rounded="md"
        shadow="xl"
        p="1rem"
        spacing={3}
        alignItems={"center"}
      >
        <GridItem colSpan={5}>
          <Text>Sản phẩm</Text>
        </GridItem>
        <GridItem>Đơn giá</GridItem>
        <GridItem textAlign={"center"}>
          <Text>Số lượng</Text>
        </GridItem>
        <GridItem textAlign={"right"} color={"tomato"}>
          <Text>Thành tiền</Text>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        columns={8}
        bg="white"
        rounded="md"
        shadow="xl"
        p="1rem"
        spacing={3}
        alignItems={"center"}
      >
        <GridItem colSpan={5}>
          <HStack>
            <Image w="4rem" h="4rem" src={pictureUrl} />
            <Link
              to={replacePathFmt(Routes.home.routes.productDetail.path, id)}
            >
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
      </SimpleGrid>
    </>
  )
}
