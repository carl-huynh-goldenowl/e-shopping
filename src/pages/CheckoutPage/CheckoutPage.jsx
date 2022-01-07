import React, { useCallback, useEffect, useState } from "react"
import CheckoutLayout from "layout/checkout/CheckoutLayout"
import { GridItem, SimpleGrid } from "@chakra-ui/react"
import DeliveryAddress from "containers/DeliveryAddress"
import useDeliveryInfo from "./hooks/apiHooks/useDeliveryInfo"
import { getDeliveryInfo } from "apis/users/users"

export default function CheckoutPage() {
  const [deliveryAddress, setDeliveryAddress] = useState(null)
  const { isLoading, error, deliveryInfo } = useDeliveryInfo(
    "addressList",
    getDeliveryInfo
  )

  const onSelectDeliveryAddr = useCallback(
    (address) => {
      setDeliveryAddress(address)
    },
    [setDeliveryAddress]
  )

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
        <SimpleGrid columns={12} spacing={6} alignItems={"flex-start "}>
          <GridItem
            bg="white"
            rounded={"md"}
            shadow={"xl"}
            p={3}
            position={[null, null, null, "sticky"]}
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
        </SimpleGrid>
      </CheckoutLayout>
    </>
  )
}
