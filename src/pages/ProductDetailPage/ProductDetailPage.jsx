import React, { useCallback, useEffect, useState } from "react"
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
import { Skeleton, SkeletonText } from "@chakra-ui/react"
import ProductDetailSkeleton from "components/Skeleton/ProductDetailSkeleton/ProductDetailSkeleton"
import {
  ProductDetailImgsSlider,
  RecommendedProductsSlider,
  SimilarProductsSlider,
} from "components/Slider"
import Rating from "components/Rating"
import { ShippingFeeSelect } from "components/Select"
import QuantityInput from "components/Input/QuantityInput"
import ProductDetail from "containers/ProductDetail"
import ProductListSkeleton from "components/Skeleton/ProductListSkeleton/ProductListSkeleton"
import BestSeller from "containers/BestSeller/BestSeller"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  addProduct,
  addTmpProduct,
  addToCheckedProductList,
  deleteTmpProduct,
} from "store/slices/cartSlice"
import { Routes } from "routes/Routes"
import { useToast } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import useProductDetail from "./hooks/apiHooks/useProductDetail"
import useRecommendedProducts from "./hooks/apiHooks/useRecommendedProducts"
import useSimilarProducts from "./hooks/apiHooks/useSimilarProducts"
import useBestSellingProducts from "./hooks/apiHooks/useBestSellingProduct"
import useShippingArea from "./hooks/apiHooks/useShippingArea"
import { useQueryClient } from "react-query"

const ProductDetailPage = () => {
  const [mainImg, setMainImg] = useState("")
  const [qty, setQty] = useState(1)
  let params = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const toast = useToast()
  let location = useLocation()
  const tmpProduct = useSelector((state) => state.cart.tmpProduct)
  const { t } = useTranslation()
  const [productId, setProductId] = useState(0)
  const queryClient = useQueryClient()

  const { loadingProductDetail, errorProductDetails, productDetail } =
    useProductDetail(productId)

  const { loadingSimilarProducts, errorSimilarProducts, similarProducts } =
    useSimilarProducts(productId)

  const {
    loadingRecommendedProducts,
    errorRecommendedProducts,
    recommendedProducts,
  } = useRecommendedProducts(productId)

  const {
    loadingBestSellingProducts,
    errorBestSellingProducts,
    bestSellingProducts,
  } = useBestSellingProducts("laptop")

  const { loadingShippingArea, errorShippingArea, shippingArea } =
    useShippingArea()

  const handleChangeImg = useCallback(
    (index) => {
      setMainImg(productDetail?.data?.detailPicsUrl[index])
    },
    [setMainImg]
  )

  const handleAddToCart = useCallback(() => {
    if (user.isAuth) {
      dispatch(addProduct({ product: productDetail?.data, qty: qty }))
      toast({
        title: t("productDetailPage.addedToast"),
        status: "success",
        duration: 2000,
        isClosable: true,
      })
    } else {
      dispatch(
        addTmpProduct({
          product: productDetail?.data,
          qty: qty,
        })
      )
      navigate(Routes.signIn.path, {
        replace: true,
        state: { from: location },
      })
    }
  }, [dispatch, productDetail, qty, navigate, user.isAuth, location])

  const handleBuy = useCallback(() => {
    dispatch(addProduct({ product: productDetail?.data, qty: qty }))
    dispatch(addToCheckedProductList(productDetail?.data?.id))
    navigate(Routes.shoppingCart.path)
  }, [dispatch, navigate, productDetail, qty])

  useEffect(() => {
    if (tmpProduct) {
      dispatch(deleteTmpProduct())
      dispatch(addProduct(tmpProduct))
      toast({
        title: t("productDetailPage.addedToast"),
        status: "success",
        duration: 1000,
        isClosable: true,
      })
    }
  }, [tmpProduct])

  useEffect(() => {
    setProductId(params.id)
    queryClient.removeQueries("productDetail", { exact: true })
    queryClient.removeQueries("similarProduct", { exact: true })
    queryClient.removeQueries("recommendedProduct", { exact: true })
    queryClient.removeQueries("bestSellingProducts", { exact: true })

    window.scrollTo(0, 0)
  }, [params.id])

  if (errorProductDetails)
    return t("errors.errorHasOccurred") + errorProductDetails.message

  if (errorSimilarProducts)
    return t("errors.errorHasOccurred") + errorSimilarProducts.message

  if (errorRecommendedProducts)
    return t("errors.errorHasOccurred") + errorRecommendedProducts.message

  if (errorBestSellingProducts)
    return t("errors.errorHasOccurred") + errorBestSellingProducts.message

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
                      src={mainImg || productDetail?.data?.pictureUrl}
                      alt={productDetail?.data?.name}
                    />
                  </Box>
                </GridItem>
                <GridItem>
                  <ProductDetailImgsSlider
                    handleChangeImg={handleChangeImg}
                    imgs={productDetail?.data?.detailPicsUrl}
                  />
                </GridItem>
              </SimpleGrid>
            </GridItem>
            <GridItem colSpan={7}>
              <SimpleGrid columns={4} spacing={6} alignItems="center">
                <GridItem colSpan={4}>
                  <Heading as="h4" size="md">
                    {productDetail?.data?.name}
                  </Heading>
                </GridItem>
                <GridItem colSpan={4}>
                  <HStack spacing={6}>
                    <Rating />
                    <span>|</span>
                    <Box>
                      {productDetail?.data?.review}{" "}
                      {t("productDetailPage.review")}
                    </Box>
                    <span>|</span>
                    <Box>
                      {productDetail?.data?.sold} {t("productDetailPage.sold")}
                    </Box>
                  </HStack>
                </GridItem>
                <GridItem colSpan={4}>
                  <HStack spacing={5} bg="gray.50" rounded="md" p={5}>
                    <Text fontSize="lg" textDecoration="tomato line-through">
                      ₫{productDetail?.data?.price}
                    </Text>
                    <Heading color="tomato">
                      ₫{productDetail?.data?.discountPrice}
                    </Heading>
                  </HStack>
                </GridItem>
                <GridItem>{t("productDetailPage.discountCode")}</GridItem>
                <GridItem colSpan={3}>
                  <VStack alignItems="flex-start">
                    <Tag bg="tomato" color="white">
                      2% discount
                    </Tag>
                  </VStack>
                </GridItem>
                <GridItem>{t("productDetailPage.shipping")}</GridItem>
                <GridItem colSpan={2}>
                  {loadingShippingArea ? (
                    <GridItem colSpan={12}>
                      <Skeleton height="2rem" />
                    </GridItem>
                  ) : errorShippingArea ? (
                    <GridItem colSpan={12}>
                      <Text color="tomato">
                        {t("errors.shippingAreaErr")}:{" "}
                        {errorShippingArea.message}
                      </Text>
                    </GridItem>
                  ) : null}

                  {shippingArea && (
                    <ShippingFeeSelect shippingArea={shippingArea} />
                  )}
                </GridItem>
                <GridItem colStart={1}>
                  {t("productDetailPage.quantity")}
                </GridItem>
                <GridItem>
                  <QuantityInput handleChangeQty={setQty} />
                </GridItem>
                <GridItem colSpan={4} paddingTop={5}>
                  <HStack spacing={2}>
                    <Button
                      colorScheme="teal"
                      size="lg"
                      w="13rem"
                      variant="outline"
                      onClick={handleAddToCart}
                    >
                      {t("productDetailPage.addToCartTitle")}
                    </Button>
                    <Button
                      colorScheme="teal"
                      size="lg"
                      w="10rem"
                      onClick={handleBuy}
                    >
                      {t("productDetailPage.buyTitle")}
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
              <GridItem bg="white" boxShadow="xl" rounded="md" p={6}>
                <SkeletonText noOfLines={20} spacing="4" />
              </GridItem>
            ) : (
              <ProductDetail
                productDetail={productDetail?.data?.detail}
                description={productDetail?.data?.description}
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
                <SimilarProductsSlider productList={similarProducts} />
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
