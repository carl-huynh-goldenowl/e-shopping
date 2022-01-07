import React, { useCallback, useEffect, useMemo, useState } from "react"
import CheckoutLayout from "layout/checkout/CheckoutLayout"
import { GridItem, SimpleGrid, Text } from "@chakra-ui/react"
import DeliveryAddress from "containers/DeliveryAddress"
import useDeliveryInfo from "./hooks/apiHooks/useDeliveryInfo"
import { getDeliveryInfo } from "apis/users/users"
//import { useSelector } from "react-redux"
import useCheckedProduct from "./hooks/apiHooks/useCheckedProductList"
import { getCheckedProductList } from "apis/products"
import LoadingSpinner from "components/LoadingSpinner"
import ProductInOrder from "containers/ProductInOrder/ProductInOrder"
import _ from "lodash"
import OrderDetail from "containers/OrderDetail"

export default function CheckoutPage() {
  const [deliveryAddress, setDeliveryAddress] = useState(null)
  const { isLoading, error, deliveryInfo } = useDeliveryInfo(
    "addressList",
    getDeliveryInfo
  )
  //const cart = useSelector((state) => state.cart.cart)
  // const checkedProductList = useSelector(
  //   (state) => state.cart.checkedProductList
  // )
  const {
    isLoadingCheckedProductList,
    checkedProductListError,
    checkedProductDetailList,
  } = useCheckedProduct("checkedProductList", getCheckedProductList)

  const onSelectDeliveryAddr = useCallback(
    (address) => {
      setDeliveryAddress(address)
    },
    [setDeliveryAddress]
  )

  const calcTotal = useMemo(() => {
    let total = 0
    _.forEach(checkedProductDetailList, (product) => {
      total += product.qty * product.discountPrice
    })

    return total
  }, [checkedProductDetailList])

  useEffect(() => {
    if (deliveryInfo) {
      const result = deliveryInfo.addressList.findIndex(
        (item) => item.id === Number(deliveryInfo.selectedAddress)
      )
      onSelectDeliveryAddr(deliveryInfo.addressList[result])
    }
  }, [deliveryInfo])

  return (
    <>
      <CheckoutLayout>
        <SimpleGrid columns={12} spacing={3} alignItems={"flex-start "}>
          <GridItem
            bg="white"
            rounded={"md"}
            shadow={"xl"}
            p={3}
            top={6}
            colSpan={12}
          >
            {isLoading && <h6>Loading...</h6>}
            {error && <h6>Lỗi: {error.message}</h6>}
            {deliveryInfo && (
              <DeliveryAddress
                deliveryInfo={deliveryInfo}
                onSelectDeliveryAddr={onSelectDeliveryAddr}
                deliveryAddress={deliveryAddress}
              />
            )}
          </GridItem>
          {isLoadingCheckedProductList && <LoadingSpinner />}
          {checkedProductListError && (
            <Text color="tomato">{checkedProductListError.message}</Text>
          )}
          {checkedProductDetailList && (
            <>
              <GridItem
                bg="white"
                rounded={"md"}
                shadow={"xl"}
                top={6}
                colSpan={12}
              >
                <SimpleGrid
                  columns={8}
                  p="1rem"
                  spacing={3}
                  alignItems={"center"}
                  borderBottom={"1px solid #f0f0f0"}
                >
                  <GridItem colSpan={5}>
                    <Text>Sản phẩm</Text>
                  </GridItem>
                  <GridItem>Đơn giá</GridItem>
                  <GridItem textAlign={"center"}>
                    <Text>Số lượng</Text>
                  </GridItem>
                  <GridItem textAlign={"right"} color={"tomato"}>
                    <Text>Thành tiền</Text>
                  </GridItem>
                </SimpleGrid>
                <SimpleGrid
                  columns={8}
                  p="1rem"
                  spacing={3}
                  alignItems={"center"}
                >
                  <ProductInOrder {...checkedProductDetailList[0]} />
                </SimpleGrid>
              </GridItem>
              {_.slice(checkedProductDetailList, 1).map((checkedProduct) => (
                <GridItem colSpan={12} key={checkedProduct.id}>
                  <SimpleGrid
                    columns={8}
                    bg="white"
                    rounded="md"
                    shadow="xl"
                    p="1rem"
                    spacing={3}
                    alignItems={"center"}
                  >
                    <ProductInOrder {...checkedProduct} />
                  </SimpleGrid>
                </GridItem>
              ))}
            </>
          )}
          <GridItem
            bg="white"
            rounded={"md"}
            shadow={"xl"}
            p={3}
            top={6}
            colSpan={12}
          >
            <OrderDetail total={calcTotal} />
          </GridItem>
        </SimpleGrid>
      </CheckoutLayout>
    </>
  )
}
