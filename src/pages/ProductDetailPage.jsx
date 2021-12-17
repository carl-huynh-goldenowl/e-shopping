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
import { useQuery } from "react-query"
import { SkeletonText } from "@chakra-ui/react"
import ProductDetailSkeleton from "components/Skeleton/ProductDetailSkeleton/ProductDetailSkeleton"
import { ProductDetailImgsSlider } from "components/Slider"
import Rating from "components/Rating"
import ShippingFeeSelect from "components/Select/ShippingFeeSelect"
import QuantityInput from "components/Input/QuantityInput"
import ProductDetail from "containers/ProductDetail"
import ProductListSkeleton from "components/Skeleton/ProductListSkeleton/ProductListSkeleton"
import SimilarProductsSlider from "components/Slider/SimilarProductSlider"
import RecommendedProductsSlider from "components/Slider/RecommendedProductsSlider"
import BestSeller from "containers/BestSeller"
import {
  getProductDetail,
  getSimilarProducts,
  getRecommendedProducts,
  getBestSellingProducts,
} from "apis/products"

const ProductDetailPage = () => {
  const [mainImg, setMainImg] = useState("")
  const {
    isLoading: loadingProductDetail,
    error: errorProductDetail,
    data: productDetail,
  } = useQuery("productDetail", () => getProductDetail(1))

  const {
    isLoading: loadingSimilarProducts,
    error: errorSimilarProduct,
    data: similarProduct,
  } = useQuery("similarProducts", () => getSimilarProducts(1))

  const {
    isLoading: loadingRecommendedProducts,
    error: errorRecommendedProducts,
    data: recommendedProducts,
  } = useQuery("recommendedProducts", () => getRecommendedProducts(1))

  const {
    isLoading: loadingBestSellingProducts,
    error: errorBestSellingProducts,
    data: bestSellingProducts,
  } = useQuery("bestSellingProducts", () => getBestSellingProducts("laptop"))

  const handleChangeImg = (index) => {
    setMainImg(productDetail.detailPicsUrl[index])
  }

  if (errorProductDetail)
    return "An error has occurred: " + errorProductDetail.message

  if (errorSimilarProduct)
    return "An error has occurred: " + errorSimilarProduct.message

  if (errorRecommendedProducts)
    return "An error has occurred: " + errorRecommendedProducts.message

  if (errorBestSellingProducts)
    return "An error has occurred: " + errorBestSellingProducts.message

  return (
    <SimpleGrid spacing={6}>
      {loadingProductDetail ? (
        <ProductDetailSkeleton />
      ) : (
        <>
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
                      alt={productDetail.name}
                    />
                  </Box>
                </GridItem>
                <GridItem>
                  <ProductDetailImgsSlider
                    handleChangeImg={handleChangeImg}
                    imgs={productDetail.detailPicsUrl}
                  />
                </GridItem>
              </SimpleGrid>
            </GridItem>
            <GridItem colSpan={7}>
              <SimpleGrid columns={4} spacing={6} alignItems="center">
                <GridItem colSpan={4}>
                  <Heading as="h4" size="md">
                    {productDetail.name}
                  </Heading>
                </GridItem>
                <GridItem colSpan={4}>
                  <HStack spacing={6}>
                    <Rating />
                    <span>|</span>
                    <Box>{productDetail.review} review</Box>
                    <span>|</span>
                    <Box>{productDetail.sold} sold</Box>
                  </HStack>
                </GridItem>
                <GridItem colSpan={4}>
                  <HStack spacing={5} bg="gray.50" rounded="md" p={5}>
                    <Text fontSize="lg" textDecoration="tomato line-through">
                      ₫{productDetail.price}
                    </Text>
                    <Heading color="tomato">
                      ₫{productDetail.discountPrice}
                    </Heading>
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
        </>
      )}

      <SimpleGrid columns={12} spacing={6} alignItems="flex-start">
        <GridItem colSpan={9}>
          <SimpleGrid columns={1} spacing={6}>
            {loadingProductDetail ? (
              <SkeletonText noOfLines={20} spacing="4" />
            ) : (
              <ProductDetail
                productDetail={productDetail.detail}
                description={productDetail.description}
              />
            )}
            <GridItem>
              {loadingSimilarProducts ? (
                <ProductListSkeleton
                  productTotal={5}
                  colTotal={5}
                  mergedColNum={1}
                  pictureHeight={8}
                />
              ) : (
                <SimilarProductsSlider productList={similarProduct} />
              )}
            </GridItem>
            <GridItem>
              {loadingRecommendedProducts ? (
                <ProductListSkeleton
                  productTotal={5}
                  colTotal={5}
                  mergedColNum={1}
                  pictureHeight={8}
                />
              ) : (
                <RecommendedProductsSlider productList={recommendedProducts} />
              )}
            </GridItem>
          </SimpleGrid>
        </GridItem>
        {loadingBestSellingProducts ? (
          <GridItem colSpan={3}>
            <ProductListSkeleton
              productTotal={3}
              colTotal={1}
              mergedColNum={1}
              pictureHeight={15}
            />
          </GridItem>
        ) : (
          <BestSeller productList={bestSellingProducts} />
        )}
      </SimpleGrid>
    </SimpleGrid>
  )
}

export default ProductDetailPage
