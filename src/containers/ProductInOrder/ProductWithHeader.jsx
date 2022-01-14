import { GridItem, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"
import _ from "lodash"
import { Link } from "react-router-dom"
import replacePathFmt from "components/TabPanel/AllProductsTabPanel/helpers"
import { Routes } from "routes/Routes"
import { useTranslation } from "react-i18next"

export default function AddedProduct({
  id,
  name,
  pictureUrl,
  discountPrice,
  qty,
}) {
  const { t } = useTranslation()

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
          <Text>{t("cart.product")}</Text>
        </GridItem>
        <GridItem>{t("cart.unitPrice")}</GridItem>
        <GridItem textAlign={"center"}>
          <Text>{t("cart.quantity")}</Text>
        </GridItem>
        <GridItem textAlign={"right"}>
          <Text>{t("orderDetail.intoMoney")}</Text>
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
