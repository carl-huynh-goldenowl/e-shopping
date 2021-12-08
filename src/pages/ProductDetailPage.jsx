import React, { useState } from "react"
import {
  GridItem,
  SimpleGrid,
  Box,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Button } from "@chakra-ui/button"
import { Tag } from "@chakra-ui/tag"

import Rating from "../components/Rating"
import QuantityInput from "../components/Input/QuantityInput"
import ProductDetailImgsSlider from "../components/Slider/ProductDetailImgsSlider"
import ProductDetail from "../containers/ProductDetail"
import BestSeller from "../containers/BestSeller"
import SimilarProductSlider from "../components/Slider/SimilarProductSlider"
import RecommendedProductsSlider from "../components/Slider/RecommendedProductsSlider"
import ShippingFeeSelect from "../components/Select/ShippingFeeSelect"

const productInfo = {
  id: 1,
  name: `Laptop Asus VivoBook F512J - I3 1005G1/ RAM 4GB/SSD 128 GB/15.6
              inch/Cảm ứng/Win10/Màu đen- Nhập khẩu chính hãng -BH 12T`,
  img: "https://cf.shopee.vn/file/847276f65de86e5e612cc3d42761ba76",
  productDetailImgs: [
    "https://cf.shopee.vn/file/847276f65de86e5e612cc3d42761ba76",
    "https://cf.shopee.vn/file/d1fae5bae7153be96056fa2b7e59d650",
    "https://cf.shopee.vn/file/6b8eba44e45c1a838a4853c5e559ad7e",
    "https://cf.shopee.vn/file/2efabc78210e68b2cf0ef30a2e60d305",
    "https://cf.shopee.vn/file/8c8d8e51dc4c37e4754fa67e7441bc91",
    "https://cf.shopee.vn/file/847276f65de86e5e612cc3d42761ba76",
    "https://cf.shopee.vn/file/d1fae5bae7153be96056fa2b7e59d650",
    "https://cf.shopee.vn/file/6b8eba44e45c1a838a4853c5e559ad7e",
  ],
  price: "12.900.000",
  discountPrice: "12.290.000",
  rating: 4,
  review: 10,
  sold: 20,
  productDetail: {
    trademark: "Asus",
    warrantyPeriod: "12 tháng",
    warrantyType: "Bảo hành nhà cung cấp",
    laptopType: "Khác",
    status: "Mới",
    quantity: 89,
    sendFrom: "Quận Thanh Xuân, Hà Nội",
  },
  description:
    "Laptop ASUS VivoBook F512JA  là mẫu laptop học tập - văn phòng tầm trung. Nếu bạn đang tìm kiếm một chiếc laptop có cấu hình ổn định và mức giá rẻ thì hãy tham khảo những tính năng của chiếc ASUS VivoBook F512JA. Hiệu năng trung bình Laptop văn phòng ASUS VivoBook vận hành bởi CPU Intel Core i3, RAM 4 GB được cài đặt sẵn Windown 10. Cấu hình này chạy được các ứng dụng Office thông dụng như Word, Excel,..  ",
}

const ProductDetailPage = () => {
  const [mainImg, setMainImg] = useState(productInfo.img)

  const handleChangeImg = (index) => {
    setMainImg(productInfo.productDetailImgs[index])
  }

  return (
    <SimpleGrid spacing={6}>
      <SimpleGrid
        columns={12}
        spacing={6}
        p={6}
        bg="white"
        boxShadow="xl"
        rounded="md"
      >
        <GridItem colSpan={5}>
          <SimpleGrid columns={1} spacing={3}>
            <GridItem>
              <Box>
                <Image
                  objectFit="cover"
                  width="100%"
                  height="30rem"
                  src={mainImg}
                  alt={productInfo.name}
                />
              </Box>
            </GridItem>
            <GridItem>
              <ProductDetailImgsSlider
                handleChangeImg={handleChangeImg}
                imgs={productInfo.productDetailImgs}
              />
            </GridItem>{" "}
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={7}>
          <SimpleGrid columns={4} spacing={6} alignItems="center">
            <GridItem colSpan={4}>
              <Heading as="h4" size="md">
                {productInfo.name}
              </Heading>
            </GridItem>
            <GridItem colSpan={4}>
              <HStack spacing={6}>
                <Rating />
                <span>|</span>
                <Box>{productInfo.review} review</Box>
                <span>|</span>
                <Box>{productInfo.sold} sold</Box>
              </HStack>
            </GridItem>
            <GridItem colSpan={4}>
              <HStack spacing={5} bg="gray.50" rounded="md" p={5}>
                <Text fontSize="lg" textDecoration="tomato line-through">
                  ₫{productInfo.price}
                </Text>
                <Heading color="tomato">₫{productInfo.discountPrice}</Heading>
              </HStack>
            </GridItem>
            <GridItem>Mã Giảm Giá</GridItem>
            <GridItem colSpan={3}>
              <VStack alignItems="flex-start">
                <Tag bg="tomato" color="white">
                  2% discount
                </Tag>
              </VStack>
            </GridItem>
            <GridItem>Vận chuyển</GridItem>
            <GridItem colSpan={2}>
              <ShippingFeeSelect />
            </GridItem>
            <GridItem colStart={1}>Số lượng</GridItem>
            <GridItem>
              <QuantityInput />
            </GridItem>
            <GridItem colSpan={4} paddingTop={5}>
              <HStack spacing={2}>
                <Button
                  colorScheme="teal"
                  size="lg"
                  w="10rem"
                  variant="outline"
                >
                  Add to cart
                </Button>
                <Button colorScheme="teal" size="lg" w="10rem">
                  Buy
                </Button>
              </HStack>
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid columns={12} spacing={6} alignItems="flex-start">
        <GridItem colSpan={9}>
          <SimpleGrid columns={1} spacing={6}>
            <ProductDetail
              productDetail={productInfo.productDetail}
              description={productInfo.description}
            />
            <GridItem>
              <SimilarProductSlider />
            </GridItem>
            <GridItem>
              <RecommendedProductsSlider />
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <BestSeller />
      </SimpleGrid>
    </SimpleGrid>
  )
}

export default ProductDetailPage
