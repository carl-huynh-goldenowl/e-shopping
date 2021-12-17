import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper"
import { Box, Image, GridItem, Text, VStack } from "@chakra-ui/react"

// install Swiper modules
SwiperCore.use([Navigation])

const Product = ({ name, img, discountPrice }) => {
  return (
    <GridItem bg="white" p="1rem" textAlign="left">
      <Box>
        <Image objectFit="cover" width="50%" src={img} alt={name} />
      </Box>
      <Text fontSize="sm" noOfLines={2}>
        {name}
      </Text>
      <Text fontSize="lg" color="tomato">
        ₫{discountPrice}
      </Text>
    </GridItem>
  )
}

export default function RecommendedProductsSlider({ productList }) {
  return (
    <VStack>
      <Text w="100%">CÓ THỂ BẠN CŨNG THÍCH</Text>
      <Swiper
        navigation={true}
        slidesPerView={5}
        slidesPerGroup={5}
        spaceBetween={16}
      >
        {productList.map((product, index) => (
          <SwiperSlide key={index}>
            <Product
              key={index}
              name={product.name}
              img={product.img}
              discountPrice={product.discountPrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  )
}
