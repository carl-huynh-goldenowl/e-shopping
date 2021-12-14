import React from "react"
import { SimpleGrid, GridItem, Text, Heading } from "@chakra-ui/react"
import ProductPicInputList from "../components/Input/ProductPicInputList"
import ProductDescriptionTextarea from "../components/Input/ProductDescriptionTextarea"

export default function BasicProductInfo() {
  return (
    <>
      <Heading as="h5" size="sm">
        Thông tin cơ bản
      </Heading>
      <SimpleGrid
        columns={12}
        spacing={3}
        alignItems={"flex-start"}
        pt="2rem"
        spacingY={[10, 5]}
      >
        <GridItem colSpan={[12, 12, 2]}>
          <Text>Hình ảnh sản phẩm</Text>
        </GridItem>
        <GridItem colSpan={[12, 12, 10]}>
          <ProductPicInputList />
        </GridItem>
        <GridItem colSpan={[12, 12, 2]}>
          <Text>Mô tả sản phẩm</Text>
        </GridItem>
        <GridItem colSpan={[12, 12, 10]}>
          <ProductDescriptionTextarea />
        </GridItem>
      </SimpleGrid>
    </>
  )
}
