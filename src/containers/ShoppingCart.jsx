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
import { useSelector } from "react-redux"
import CurrentOrder from "./CurrentOrder"
import _ from "lodash"
import { useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"
import AddedProduct from "./AddedProduct/AddedProduct"

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart.cart)
  const navigate = useNavigate()
  const [checkAll, setCheckAll] = useState(false)
  const [count, setCount] = useState(0)

  // Init checkbox list
  let initCheckState = Array(cart.length).fill(false)
  const [checkedItems, setCheckedItems] = useState(initCheckState)

  // Init quantity list
  let initQuantityList = []
  cart.forEach((element) => {
    initQuantityList.push(element.qty)
  })

  const [quantityList, setQuantityList] = useState(initQuantityList)

  const hanleClickCheckBoxItem = (e) => {
    setCheckedItems(
      _.concat(
        checkedItems.slice(0, parseInt(e.target.name)),
        e.target.checked,
        checkedItems.slice(parseInt(e.target.name) + 1)
      )
    )
  }

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setCheckedItems(Array(cart.length).fill(true))
    } else {
      setCheckedItems(initCheckState)
    }
    setCheckAll(e.target.checked)
  }

  const handleRedirectToHome = useCallback(() => {
    navigate(Routes.home.path)
  }, [navigate])

  useEffect(() => {
    setCount(Object.values(checkedItems).filter((element) => element).length)
  }, [checkedItems])

  useEffect(() => {
    if (count === cart.length && cart.length !== 0) {
      setCheckAll(true)
    } else setCheckAll(false)
  }, [cart.length, count])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

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
              checked={checkedItems[index]}
              quantity={quantityList[index]}
              onChange={setQuantityList}
            />
          </GridItem>
        ))}

        <GridItem>
          <CurrentOrder
            handleCheckAll={handleCheckAll}
            checkAll={checkAll}
            isIndeterminate={isIndeterminate}
            cartLenght={cart.length}
          />
        </GridItem>
      </SimpleGrid>
    )
}
