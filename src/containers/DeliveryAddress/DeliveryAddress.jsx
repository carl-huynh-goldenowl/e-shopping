//import { AddIcon } from "@chakra-ui/icons"
import {
  Button,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
//import { getAddressList } from "apis/users/users"
//import LoadingSpinner from "components/LoadingSpinner"
import AddressRadio from "components/Radio/AddressRadio"
import AddAddressAlertDialog from "containers/AddAddressAlertDialog"
import React, { useCallback, useState } from "react"
import { IoLocationSharp } from "react-icons/io5"
//import useAddressList from "./hooks/apiHooks/useAddressList"

export default function DeliveryAddress({
  onSelectDeliveryAddr,
  deliveryAddress,
  deliveryInfo,
}) {
  const [displayAddressRadio, setDisplayAddressRadio] = useState(false)

  const handleDisplayRadio = useCallback(() => {
    setDisplayAddressRadio((prevState) => !prevState)
  }, [setDisplayAddressRadio])

  return (
    <SimpleGrid columns={12} spacing={3}>
      <GridItem colSpan={12}>
        <SimpleGrid columns={12} alignItems={"center"}>
          <GridItem colSpan={6} color={"teal.400"} py={"0.5rem"}>
            <HStack>
              <IoLocationSharp />
              <Text fontSize={"xl"}>Địa chỉ nhận hàng</Text>
            </HStack>
          </GridItem>
          <GridItem colSpan={6} textAlign={"right"}>
            {displayAddressRadio && <AddAddressAlertDialog />}
          </GridItem>
        </SimpleGrid>
      </GridItem>
      <GridItem colSpan={12}>
        <SimpleGrid columns={12}>
          <GridItem colSpan={10} pl={"3rem"}>
            {displayAddressRadio ? (
              <>
                <AddressRadio
                  addressList={deliveryInfo.addressList}
                  selectedAddress={deliveryInfo.selectedAddress}
                  onSelectDeliveryAddr={onSelectDeliveryAddr}
                />
                <HStack pt={"1rem"}>
                  <Button
                    colorScheme={"teal"}
                    onClick={handleDisplayRadio}
                    type="submit"
                  >
                    Hoàn thành
                  </Button>
                  <Button variant={"outline"} onClick={handleDisplayRadio}>
                    Trở lại
                  </Button>
                </HStack>
              </>
            ) : (
              <HStack>
                <Heading as="h6" size="md">
                  {deliveryAddress?.name + " " + deliveryAddress?.phoneNumber}
                </Heading>
                <Text fontSize={"lg"} noOfLines={1}>
                  {deliveryAddress?.address}
                </Text>
              </HStack>
            )}
          </GridItem>
          <GridItem colSpan={2}>
            {!displayAddressRadio && (
              <Button
                variant={"ghost"}
                colorScheme={"teal"}
                onClick={handleDisplayRadio}
              >
                Thay đổi
              </Button>
            )}
          </GridItem>
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  )
}
