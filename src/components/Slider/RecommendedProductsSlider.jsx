import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"
// import "swiper/swiper-bundle.min.css"
// import "./styles.css"

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper"
import { Box, Image, GridItem, Text, VStack } from "@chakra-ui/react"

// install Swiper modules
SwiperCore.use([Navigation])

const productList = [
  {
    id: 1,
    name: `Laptop Asus VivoBook F512J - I3 1005G1/ RAM 4GB/SSD 128 GB/15.6
              inch/Cảm ứng/Win10/Màu đen- Nhập khẩu chính hãng -BH 12T`,
    img: "https://cf.shopee.vn/file/d1fae5bae7153be96056fa2b7e59d650",
    discountPrice: "12.290.000",
  },
  {
    id: 2,
    name: `Laptop Asus VivoBook F512J - I3 1005G1/ RAM 4GB/SSD 128 GB/15.6
              inch/Cảm ứng/Win10/Màu đen- Nhập khẩu chính hãng -BH 12T`,
    img: "https://cf.shopee.vn/file/6b8eba44e45c1a838a4853c5e559ad7e",
    discountPrice: "12.290.000",
  },
  {
    id: 3,
    name: `Laptop Asus VivoBook F512J - I3 1005G1/ RAM 4GB/SSD 128 GB/15.6
              inch/Cảm ứng/Win10/Màu đen- Nhập khẩu chính hãng -BH 12T`,
    img: "https://cf.shopee.vn/file/2efabc78210e68b2cf0ef30a2e60d305",
    discountPrice: "12.290.000",
  },
  {
    id: 1,
    name: `Laptop Asus VivoBook F512J - I3 1005G1/ RAM 4GB/SSD 128 GB/15.6
              inch/Cảm ứng/Win10/Màu đen- Nhập khẩu chính hãng -BH 12T`,
    img: "https://cf.shopee.vn/file/d1fae5bae7153be96056fa2b7e59d650",
    discountPrice: "12.290.000",
  },
  {
    id: 2,
    name: `Laptop Asus VivoBook F512J - I3 1005G1/ RAM 4GB/SSD 128 GB/15.6
              inch/Cảm ứng/Win10/Màu đen- Nhập khẩu chính hãng -BH 12T`,
    img: "https://cf.shopee.vn/file/6b8eba44e45c1a838a4853c5e559ad7e",
    discountPrice: "12.290.000",
  },
  {
    id: 3,
    name: `Laptop Asus VivoBook F512J - I3 1005G1/ RAM 4GB/SSD 128 GB/15.6
              inch/Cảm ứng/Win10/Màu đen- Nhập khẩu chính hãng -BH 12T`,
    img: "https://cf.shopee.vn/file/2efabc78210e68b2cf0ef30a2e60d305",
    discountPrice: "12.290.000",
  },
  {
    id: 1,
    name: `Laptop Asus VivoBook F512J - I3 1005G1/ RAM 4GB/SSD 128 GB/15.6
              inch/Cảm ứng/Win10/Màu đen- Nhập khẩu chính hãng -BH 12T`,
    img: "https://cf.shopee.vn/file/d1fae5bae7153be96056fa2b7e59d650",
    discountPrice: "12.290.000",
  },
  {
    id: 2,
    name: `Laptop Asus VivoBook F512J - I3 1005G1/ RAM 4GB/SSD 128 GB/15.6
              inch/Cảm ứng/Win10/Màu đen- Nhập khẩu chính hãng -BH 12T`,
    img: "https://cf.shopee.vn/file/6b8eba44e45c1a838a4853c5e559ad7e",
    discountPrice: "12.290.000",
  },
  {
    id: 3,
    name: `Laptop Asus VivoBook F512J - I3 1005G1/ RAM 4GB/SSD 128 GB/15.6
              inch/Cảm ứng/Win10/Màu đen- Nhập khẩu chính hãng -BH 12T`,
    img: "https://cf.shopee.vn/file/2efabc78210e68b2cf0ef30a2e60d305",
    discountPrice: "12.290.000",
  },
]

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

export default function RecommendedProductsSlider() {
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
