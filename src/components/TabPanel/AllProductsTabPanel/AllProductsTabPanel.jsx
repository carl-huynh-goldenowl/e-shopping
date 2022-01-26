import {
  SimpleGrid,
  GridItem,
  Heading,
  Button,
  ButtonGroup,
  Image,
  Text,
  Box,
} from "@chakra-ui/react"
import React, { useCallback, useEffect, useState } from "react"
import { AddIcon, EditIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
import SortButton from "components/Button/SortButton"
import PaginatedItems from "components/PaginatedItems/Pagination/Pagination"
import { Routes } from "routes/Routes"
import replacePathFmt from "./helpers"
import { useTranslation } from "react-i18next"
import usePriceSorting from "./hooks/apiHooks/usePriceSorting"

// const product = {
//   id: "111",
//   name: "product name",
//   pictureUrl: "https://cf.shopee.vn/file/7e970b23dff00959b680fbb0928d8dd4_tn",
//   price: "1000",
//   stock: 0,
//   sold: 0,
// }

const ProductItem = ({ product }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleEditProduct = useCallback(
    (id) => () => {
      navigate(replacePathFmt(Routes.admin.routes.editProduct.path, id))
    },
    [navigate]
  )

  return (
    <GridItem
      colSpan={[6, 4, 3, 2]}
      border="0.001rem solid teal"
      borderRadius={"5px"}
      shadow="lg"
      bg={"white.100"}
      p={2}
      m={1}
      _hover={{
        border: "0.2rem solid red",
        borderColor: "teal.300",
        margin: "0.1",
      }}
    >
      <Image src={product.pictureUrl} width="100%" h="8rem" />
      <Box>
        <Text fontSize="sm" noOfLines={2} h="3rem">
          {product.name}
        </Text>

        <Text fontSize="lg" color="tomato">
          ₫{product.discountPrice}
        </Text>

        <Text fontSize="sm">
          {t("productsManagement.stock")}: {product.stock || 0}
        </Text>
        <Text fontSize="sm">
          {t("productsManagement.sold")}: {product.sold || 0}
        </Text>
      </Box>
      <Button w="100%" onClick={handleEditProduct(product.id)}>
        <EditIcon />
      </Button>
    </GridItem>
  )
}

export default function AllProductsTabPanel() {
  const [isDescPrice, setIsDescPrice] = useState(true)
  const [isDescBestSelling, setIsDescBestSelling] = useState(true)
  const [hightlight, setHighlight] = useState([true, false])
  const [page, setPage] = useState(0)
  const [productList, setProductList] = useState(null)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { priceSortingList } = usePriceSorting(
    isDescPrice,
    productList?.hasMore,
    page
  )

  const handleSort = (e) => {
    switch (e.target.value) {
      case "price":
        setIsDescPrice(!isDescPrice)
        setHighlight([true, false])

        break
      case "bestSelling":
        setIsDescBestSelling(!isDescBestSelling)
        setHighlight([false, true])
        break
      default:
        break
    }
  }

  const handleAddProduct = useCallback(() => {
    navigate(Routes.admin.path + "/" + Routes.admin.routes.addProduct.path)
  }, [])

  const handleChangePage = useCallback(
    (data) => {
      setPage(data)
    },
    [setPage]
  )

  useEffect(() => {
    setProductList(priceSortingList)
  }, [priceSortingList])

  return (
    <>
      <SimpleGrid columns={12} alignItems={"center"}>
        <GridItem colSpan={4}>
          <Heading as="h3" size="md">
            Product
          </Heading>
        </GridItem>
        <GridItem colSpan={5}>
          <ButtonGroup variant="ghost" spacing="0.5rem">
            <SortButton
              title={t("productsManagement.priceBtn")}
              isDesc={isDescPrice}
              value="price"
              onClick={(e) => handleSort(e)}
              color={hightlight[0] ? "teal.400" : "black"}
            />
            <SortButton
              title={t("productsManagement.bestSellingBtn")}
              isDesc={isDescBestSelling}
              value="bestSelling"
              onClick={(e) => handleSort(e)}
              color={hightlight[2] ? "teal.400" : "black"}
            />
          </ButtonGroup>
        </GridItem>
        <GridItem colSpan={3}>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="teal"
            variant="solid"
            w="100%"
            onClick={handleAddProduct}
          >
            {t("productsManagement.addNewProductBtn")}
          </Button>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid columns={12} alignItems={"center"} p={"2rem 0"} spacing={3}>
        {productList?.productList.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </SimpleGrid>
      <PaginatedItems
        itemsPerPage={productList?.itemsPerPage || 1}
        total={productList?.total || 0}
        handleChangePage={handleChangePage}
        initPage={page || 0}
      />
    </>
  )
}
