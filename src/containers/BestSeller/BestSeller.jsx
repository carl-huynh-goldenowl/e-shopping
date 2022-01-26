import React from "react"
import { GridItem, Text, Box, SimpleGrid, Link } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { useTranslation } from "react-i18next"
import { Link as ReactLink } from "react-router-dom"
import replacePathFmt from "./helpers"
import { Routes } from "routes/Routes"

const Product = ({ id, name, img, discountPrice }) => {
  return (
    <GridItem
      bg="white"
      p="1rem"
      borderTop="0.01rem solid tomato"
      _hover={{
        border: "0.2rem solid red",
        borderColor: "teal.300",
        textDecoration: "none",
        margin: "0.1",
      }}
    >
      <Link
        as={ReactLink}
        to={replacePathFmt(Routes.home.routes.productDetail.path, id)}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Box>
          <Image objectFit="cover" width="100%" src={img} alt={name} />
        </Box>
        <Text fontSize="md" noOfLines={2}>
          {name}
        </Text>
        <Text fontSize="lg" color="tomato">
          ₫{discountPrice}
        </Text>
      </Link>
    </GridItem>
  )
}

const BestSeller = ({ productList }) => {
  const { t } = useTranslation()
  return (
    <>
      <GridItem
        colSpan={3}
        py="1rem"
        bg="white"
        boxShadow="xl"
        rounded="md"
        alignItems="normal"
      >
        <Text fontSize="md" p="0 1rem 1rem 1rem">
          {t("productDetailPage.bestSellerProducts")}
        </Text>
        <SimpleGrid>
          {productList.map((product, index) => (
            <Product
              key={index}
              id={product.id}
              name={product.name}
              img={product.pictureUrl}
              discountPrice={product.discountPrice}
            />
          ))}
        </SimpleGrid>
      </GridItem>
    </>
  )
}

export default BestSeller
