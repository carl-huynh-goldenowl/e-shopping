import {
  Button,
  Center,
  Checkbox,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import React, { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CurrentOrder from "./CurrentOrder"
import _ from "lodash"
import { useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"
import AddedProduct from "./AddedProduct/AddedProduct"
import DeleteProductAlertDialog from "./DeleteProductAlertDialog/DeleteProductAlertDialog"
import { updateCheckedProductList } from "store/slices/cartSlice"
import { useTranslation } from "react-i18next"

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart.cart)
  const checkedProductList = useSelector(
    (state) => state.cart.checkedProductList
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const { t } = useTranslation()

  // Init checkbox list
  let initCheckState = []

  cart.forEach((product) => {
    const index = _.findIndex(checkedProductList, { id: product.id })
    initCheckState.push({
      id: product.id,
      isChecked: index >= 0 && checkedProductList[index].isChecked,
    })
  })

  // Init quantity list
  let initQuantityList = []
  cart.forEach((element) => {
    initQuantityList.push(element.qty)
  })

  const [quantityList, setQuantityList] = useState(initQuantityList)
  const [selected, setSelected] = React.useState(checkedProductList)

  const handleRedirectToHome = useCallback(() => {
    navigate(Routes.home.path)
  }, [navigate])

  const handleUpdateQty = (pos, newQty) => {
    setQuantityList((prevState) =>
      _.concat(
        _.slice(prevState, 0, pos),
        newQty,
        _.slice(prevState, pos + 1, cart.length)
      )
    )
  }

  const handleSelect = useCallback(
    (productId) => () => {
      const selectedIndex = selected.indexOf(productId)
      let newSelected = []

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, productId)
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1))
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1))
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        )
      }

      dispatch(updateCheckedProductList(newSelected))
      setSelected(newSelected)
    },
    [setSelected, selected]
  )

  const handleDelete = useCallback(
    (productId) => {
      const selectedIndex = selected.indexOf(productId)
      let newSelected = []

      if (selectedIndex === -1) {
        return
      } else {
        newSelected = [
          ...selected.slice(0, selectedIndex),
          ...selected.slice(selectedIndex + 1),
        ]
      }

      setSelected(newSelected)
      dispatch(updateCheckedProductList(newSelected))
    },
    [selected]
  )

  const isSelected = (id) => selected.indexOf(id) !== -1

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelecteds = cart.map((product) => product.id)

      setSelected(newSelecteds)
      dispatch(updateCheckedProductList(newSelecteds))
      return
    }
    setSelected([])
    dispatch(updateCheckedProductList([]))
  }

  const isIndeterminate = selected.length > 0 && selected.length < cart.length

  useEffect(() => {
    setSelected(checkedProductList)
  }, [checkedProductList])

  useEffect(() => {
    let tmp = 0
    cart.forEach((product) => {
      checkedProductList.forEach((productId) => {
        if (productId === product.id) {
          tmp += product.discountPrice * product.qty
        }
      })
    })

    setTotal(_.ceil(tmp, 2))
  }, [quantityList, cart.length, checkedProductList])

  if (cart.length === 0) {
    return (
      <SimpleGrid spacingY={3} justifyContent={"center"}>
        <GridItem>
          <Center>
            <Image w="10rem" src="/images/empty_cart.png" alt="empty_cart" />
          </Center>
        </GridItem>
        <GridItem textAlign={"center"}>
          <Text fontSize="xl" color="gray">
            {t("cart.emptyCart")}
          </Text>
        </GridItem>
        <GridItem textAlign={"center"} pt="2rem">
          <Button colorScheme={"teal"} onClick={handleRedirectToHome}>
            {t("productDetailPage.buyTitle")}
          </Button>
        </GridItem>
      </SimpleGrid>
    )
  } else
    return (
      <>
        <SimpleGrid spacingY={3}>
          <GridItem>
            <SimpleGrid
              columns={8}
              bg="white"
              rounded="md"
              shadow="xl"
              p="1rem"
              spacing={10}
            >
              <GridItem colSpan={4}>
                <Checkbox
                  colorScheme={"teal"}
                  onChange={handleSelectAllClick}
                  isChecked={cart.length === selected.length}
                  isIndeterminate={isIndeterminate}
                >
                  {t("cart.product")}
                </Checkbox>
              </GridItem>
              <GridItem textAlign={"center"}>{t("cart.unitPrice")}</GridItem>
              <GridItem textAlign={"center"}>{t("cart.quantity")}</GridItem>
              <GridItem textAlign={"center"}>{t("cart.totalPrice")}</GridItem>
              <GridItem textAlign={"center"}>{t("cart.option")}</GridItem>
            </SimpleGrid>
          </GridItem>

          {cart.map((product, index) => {
            const isItemSelected = isSelected(product.id)

            return (
              <GridItem key={index}>
                <SimpleGrid
                  columns={8}
                  bg="white"
                  rounded="md"
                  shadow="xl"
                  p="1rem"
                  spacing={3}
                  alignItems={"center"}
                >
                  <AddedProduct
                    id={index}
                    product={product}
                    quantity={quantityList[index]}
                    handleUpdateQty={handleUpdateQty}
                    isItemSelected={isItemSelected}
                    onSelect={handleSelect}
                    onDelete={handleDelete}
                  />
                </SimpleGrid>
              </GridItem>
            )
          })}

          <GridItem>
            <CurrentOrder
              //handleCheckAll={handleCheckAll}
              isSelectedAll={cart.length === selected.length}
              onSelectAll={handleSelectAllClick}
              isIndeterminate={isIndeterminate}
              cartLenght={cart.length}
              total={total}
            />
          </GridItem>
        </SimpleGrid>
        <DeleteProductAlertDialog />
      </>
    )
}
