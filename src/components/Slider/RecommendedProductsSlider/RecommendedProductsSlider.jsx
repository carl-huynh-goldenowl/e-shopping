import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper"
import {
  Box,
  Image,
  GridItem,
  Text,
  VStack,
  SimpleGrid,
  Link,
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { Link as ReactLink } from "react-router-dom"
import replacePathFmt from "./helpers"
import { Routes } from "routes/Routes"

// install Swiper modules
SwiperCore.use([Navigation])

const Product = ({ id, name, img, discountPrice }) => {
  return (
    <GridItem
      bg="white"
      p="1rem"
      textAlign="left"
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
          <Image objectFit="cover" width="50%" src={img} alt={name} />
        </Box>
        <Text fontSize="sm" noOfLines={2} height={"2.5rem"}>
          {name}
        </Text>
        <Text fontSize="lg" color="tomato">
          ₫{discountPrice}
        </Text>
      </Link>
    </GridItem>
  )
}

export default function RecommendedProductsSlider({ productList }) {
  const { t } = useTranslation()

  return (
    <VStack>
      <Text w="100%">{t("productDetailPage.recommnendedProducts")}</Text>
      <Swiper
        navigation={true}
        slidesPerView={5}
        slidesPerGroup={5}
        spaceBetween={16}
      >
        {productList.map((product, index) => (
          <SwiperSlide key={index}>
            <SimpleGrid>
              <Product
                key={index}
                id={product.id}
                name={product.name}
                img={product.pictureUrl}
                discountPrice={product.discountPrice}
              />
            </SimpleGrid>
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  )
}
