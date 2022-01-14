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
import React, { useCallback, useState } from "react"
import { AddIcon, EditIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
import SortButton from "components/Button/SortButton"
import PaginatedItems from "components/PaginatedItems/Pagination/Pagination"
import { Routes } from "routes/Routes"
import replacePathFmt from "./AllProductsTabPanel/helpers"
import { useTranslation } from "react-i18next"

const product = {
  id: "111",
  name: "product name",
  pictureUrl: "https://cf.shopee.vn/file/7e970b23dff00959b680fbb0928d8dd4_tn",
  price: "1000",
  stock: 0,
  sold: 0,
}

const ProductItem = () => {
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
      border="1px solid gray "
      borderRadius={"5px"}
      shadow="lg"
      bg={"white.100"}
      p={2}
    >
      <Image src={product.pictureUrl} />
      <Box>
        <Text fontSize="sm" noOfLines={2}>
          {product.name}
        </Text>

        <Text fontSize="lg" color="tomato">
          ₫{product.price}
        </Text>

        <Text fontSize="sm">
          {t("productsManagement.stock")}: {product.stock}
        </Text>
        <Text fontSize="sm">
          {t("productsManagement.sold")}: {product.sold}
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
  const [isDescStock, setIsDescStock] = useState(true)
  const [isDescBestSelling, setIsDescBestSelling] = useState(true)
  const [hightlight, setHighlight] = useState([true, false, false])
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleSort = (e) => {
    switch (e.target.value) {
      case "price":
        setIsDescPrice(!isDescPrice)
        setHighlight([true, false, false])
        break
      case "stock":
        setIsDescStock(!isDescStock)
        setHighlight([false, true, false])
        break
      case "bestSelling":
        setIsDescBestSelling(!isDescBestSelling)
        setHighlight([false, false, true])
        break
      default:
        break
    }
  }

  const handleAddProduct = () => {
    navigate(Routes.admin.path + "/" + Routes.admin.routes.addProduct.path)
  }

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
            {/* <SortButton
              title="Kho hàng"
              isDesc={isDescStock}
              value="stock"
              onClick={(e) => handleSort(e)}
              color={hightlight[1] ? "teal.400" : "black"}
            /> */}
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
      <SimpleGrid columns={12} alignItems={"center"} pt={10} spacing={3}>
        <ProductItem />
      </SimpleGrid>
      <PaginatedItems itemsPerPage={36} total={1} />
    </>
  )
}
