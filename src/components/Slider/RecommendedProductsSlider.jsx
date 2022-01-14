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
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

// install Swiper modules
SwiperCore.use([Navigation])

const Product = ({ name, img, discountPrice }) => {
  return (
    <GridItem bg="white" p="1rem" textAlign="left">
      <Box>
        <Image objectFit="cover" width="50%" src={img} alt={name} />
      </Box>
      <Text fontSize="sm" noOfLines={2} height={"2.5rem"}>
        {name}
      </Text>
      <Text fontSize="lg" color="tomato">
        ₫{discountPrice}
      </Text>
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
