import {
  Box,
  Button,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"

export default function OrderDetail({ total }) {
  const { t } = useTranslation()

  return (
    <>
      <HStack borderBottom={"1px solid #f0f0f0"} pb="1rem" mb="1rem">
        <Text fontSize={"lg"} fontWeight={"500"}>
          {t("orderDetail.paymentMethod")}:
        </Text>
        <Text fontSize={"lg"}>{t("orderDetail.payByCash")}</Text>
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
          <Text fontSize={"lg"}>{t("orderDetail.totalAmount")}</Text>
        </GridItem>
        <GridItem colSpan={[6, 3, 2]} textAlign={"right"}>
          <Text fontSize={"lg"}>₫{total}</Text>
        </GridItem>
        <GridItem colStart={[0, 7, 9]} colSpan={[6, 3, 2]}>
          <Text fontSize={"lg"}>{t("orderDetail.shippingFee")}</Text>
        </GridItem>
        <GridItem colSpan={[6, 3, 2]} textAlign={"right"}>
          <Text fontSize={"lg"}>₫0</Text>
        </GridItem>
        <GridItem colStart={[0, 7, 9]} colSpan={[6, 3, 2]}>
          <Text fontSize={"lg"}>{t("orderDetail.totalPayment")}</Text>
        </GridItem>
        <GridItem colSpan={[6, 3, 2]} textAlign={"right"}>
          <Text fontSize={"2xl"} color="tomato">
            ₫{total}
          </Text>
        </GridItem>
      </SimpleGrid>
      <Box textAlign={"right"}>
        <Button colorScheme="teal" w={"8rem"}>
          {t("orderDetail.order")}
        </Button>
      </Box>
    </>
  )
}
