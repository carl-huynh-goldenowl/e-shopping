import React from "react"
import { SimpleGrid, GridItem, Text, Heading } from "@chakra-ui/react"
import PreOrderRadioGroup from "components/Input/PreOrderRadioGroup"
import ProductStatusSelect from "components/Select/ProductStatusSelect"
import ProductSKUInput from "components/Input/ProductSKUInput"

export default function OtherInfo() {
  return (
    <>
      <Heading as="h5" size="sm">
        Thông tin khác
      </Heading>
      <SimpleGrid
        columns={12}
        spacing={3}
        alignItems={"flex-start"}
        pt="2rem"
        spacingY={[10, 5]}
      >
        <GridItem colSpan={[12, 12, 2]}>
          <Text>Hàng đặt trước</Text>
        </GridItem>
        <GridItem colSpan={[12, 12, 10]}>
          <PreOrderRadioGroup />
        </GridItem>
        <GridItem colSpan={[12, 12, 2]}>
          <Text>Tình trạng</Text>
        </GridItem>
        <GridItem colSpan={[12, 12, 8, 6]}>
          <ProductStatusSelect />
        </GridItem>
        <GridItem colStart={1} colEnd={[12, 12, 3, 3]}>
          <Text>SKU sản phẩm</Text>
        </GridItem>
        <GridItem colSpan={[12, 12, 8, 6]}>
          <ProductSKUInput />
        </GridItem>
      </SimpleGrid>
    </>
  )
}
