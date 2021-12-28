import React from "react"
import { Button, Checkbox, GridItem, SimpleGrid } from "@chakra-ui/react"

export default function CurrentOrder({
  handleCheckAll,
  checkAll,
  isIndeterminate,
  cartLenght,
}) {
  return (
    <SimpleGrid
      columns={12}
      bg="white"
      rounded="md"
      shadow="xl"
      p="1rem"
      alignItems={"center"}
    >
      <GridItem colSpan={6}>
        <Checkbox
          colorScheme={"teal"}
          onChange={handleCheckAll}
          isChecked={checkAll}
          isIndeterminate={isIndeterminate}
        >
          Chọn tất cả ({cartLenght})
        </Checkbox>
      </GridItem>
      <GridItem colSpan={4}>Tổng thanh toán:</GridItem>
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
  )
}
