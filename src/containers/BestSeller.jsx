import React from "react"
import { GridItem, Text, Box, SimpleGrid } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"

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
]

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

const ProductDetail = () => {
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
          Top sản phẩm bán chạy
        </Text>
        <SimpleGrid>
          {productList.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              img={product.img}
              discountPrice={product.discountPrice}
            />
          ))}
        </SimpleGrid>
      </GridItem>
    </>
  )
}

export default ProductDetail
