import React from "react"
import { GridItem, Text, Box, SimpleGrid } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { useTranslation } from "react-i18next"

const Product = ({ name, img, discountPrice }) => {
  return (
    <GridItem bg="white" p="1rem" borderTop="0.01rem solid tomato">
      <Box>
        <Image objectFit="cover" width="100%" src={img} alt={name} />
      </Box>
      <Text fontSize="md" noOfLines={2}>
        {name}
      </Text>
      <Text fontSize="lg" color="tomato">
        ₫{discountPrice}
      </Text>
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
