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
import { updateDeletedState } from "store/slices/cartSlice"

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart.cart)
  const isDeleted = useSelector((state) => state.cart.isDeleted)
  const deletedProductPos = useSelector((state) => state.cart.deletedProductPos)
  const checkedProductList = useSelector(
    (state) => state.cart.checkedProductList
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [checkAll, setCheckAll] = useState(false)
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  // Init checkbox list
  let initCheckState = []

  cart.forEach((product) => {
    const index = _.findIndex(checkedProductList, { id: product.id })
    initCheckState.push({
      id: product.id,
      isChecked: index >= 0 && checkedProductList[index].isChecked,
    })
  })

  const [checkedItems, setCheckedItems] = useState(initCheckState)

  // Init quantity list
  let initQuantityList = []
  cart.forEach((element) => {
    initQuantityList.push(element.qty)
  })

  const [quantityList, setQuantityList] = useState(initQuantityList)

  const hanleClickCheckBoxItem = (e, productId) => {
    const index = _.findIndex(checkedItems, { id: productId })
    const tmp = [...checkedItems]
    tmp[index].isChecked = e.target.checked
    setCheckedItems(tmp)
  }

  const handleCheckAll = (e) => {
    let tmp = []

    if (e.target.checked) {
      cart.forEach((product) => {
        tmp.push({ id: product.id, isChecked: true })
      })

      setCheckedItems(tmp)
    } else {
      cart.forEach((product) => {
        tmp.push({ id: product.id, isChecked: false })
      })

      setCheckedItems(tmp)
    }

    setCheckAll(e.target.checked)
  }

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

  useEffect(() => {
    setCount(
      Object.values(checkedItems).filter((element) => element.isChecked).length
    )
  }, [checkedItems, isDeleted])

  useEffect(() => {
    let tmp = 0
    cart.forEach((product, i) => {
      if (checkedItems[i].isChecked) {
        tmp += product.discountPrice * product.qty
      }
    })
    setTotal(_.ceil(tmp, 2))
  }, [checkedItems, quantityList, cart.length])

  useEffect(() => {
    if (count === cart.length) {
      setCheckAll(true)
    } else setCheckAll(false)
  }, [cart.length, count])

  // Update checked state after delete
  useEffect(() => {
    if (isDeleted) {
      let tmp = [...checkedItems]
      tmp.splice(deletedProductPos, 1)
      setCheckedItems(tmp)

      dispatch(updateDeletedState())
    }
  }, [isDeleted])

  const allChecked = checkedItems.every((item) => item.isChecked)
  const isIndeterminate =
    checkedItems.some((item) => item.isChecked) && !allChecked

  if (cart.length === 0) {
    return (
      <SimpleGrid spacingY={3} justifyContent={"center"}>
        <GridItem>
          <Center>
            <Image w="10rem" src="/images/empty_cart.png" alt="empty_cart" />
          </Center>
        </GridItem>
        <GridItem>
          <Text fontSize="xl" color="gray">
            Giỏ hàng của bạn còn trống
          </Text>
        </GridItem>
        <GridItem textAlign={"center"} pt="2rem">
          <Button colorScheme={"teal"} onClick={handleRedirectToHome}>
            Mua ngay
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
                  onChange={handleCheckAll}
                  isChecked={checkAll}
                  isIndeterminate={isIndeterminate}
                >
                  Sản phẩm
                </Checkbox>
              </GridItem>
              <GridItem textAlign={"center"}>Đơn giá</GridItem>
              <GridItem textAlign={"center"}>Số Lượng</GridItem>
              <GridItem textAlign={"center"}>Số Tiền</GridItem>
              <GridItem textAlign={"center"}>Thao Tác</GridItem>
            </SimpleGrid>
          </GridItem>

          {cart.map((product, index) => (
            <GridItem key={index}>
              <AddedProduct
                id={index}
                product={product}
                onClickCheckBoxItem={hanleClickCheckBoxItem}
                checked={checkedItems[index].isChecked}
                quantity={quantityList[index]}
                handleUpdateQty={handleUpdateQty}
              />
            </GridItem>
          ))}

          <GridItem>
            <CurrentOrder
              handleCheckAll={handleCheckAll}
              checkAll={checkAll}
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
