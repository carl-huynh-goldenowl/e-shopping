import {
  Box,
  Button,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import React from "react"

export default function OrderDetail({ total }) {
  return (
    <>
      <HStack borderBottom={"1px solid #f0f0f0"} pb="1rem" mb="1rem">
        <Text fontSize={"lg"} fontWeight={"500"}>
          Phương thức thanh toán:{" "}
        </Text>
        <Text fontSize={"lg"}>Thanh toán bằng tiền mặt</Text>
      </HStack>
      <SimpleGrid
        columns={12}
        justifyContent={"flex-end"}
        alignItems={"center"}
        spacingY={"0.5rem"}
        borderBottom={"1px solid #f0f0f0"}
        pb="1rem"
        mb="1rem"
      >
        <GridItem colStart={[0, 7, 9]} colSpan={[6, 3, 2]}>
          <Text fontSize={"lg"}>Tổng tiền hàng</Text>
        </GridItem>
        <GridItem colSpan={[6, 3, 2]} textAlign={"right"}>
          <Text fontSize={"lg"}>₫{total}</Text>
        </GridItem>
        <GridItem colStart={[0, 7, 9]} colSpan={[6, 3, 2]}>
          <Text fontSize={"lg"}> Phí vận chuyển</Text>
        </GridItem>
        <GridItem colSpan={[6, 3, 2]} textAlign={"right"}>
          <Text fontSize={"lg"}>₫0</Text>
        </GridItem>
        <GridItem colStart={[0, 7, 9]} colSpan={[6, 3, 2]}>
          <Text fontSize={"lg"}></Text>
          Tổng tiền hàng
        </GridItem>
        <GridItem colSpan={[6, 3, 2]} textAlign={"right"}>
          <Text fontSize={"2xl"} color="tomato">
            ₫{total}
          </Text>
        </GridItem>
      </SimpleGrid>
      <Box textAlign={"right"}>
        <Button colorScheme="teal"> Đặt hàng</Button>
      </Box>
    </>
  )
}
