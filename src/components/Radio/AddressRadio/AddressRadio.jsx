import {
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react"
import React, { useState } from "react"

export default function AddressRadio({
  addressList,
  onSelectDeliveryAddr,
  selectedAddress,
}) {
  const [address, setAddress] = useState(selectedAddress)

  const handleChange = (val) => {
    setAddress(Number(val))
    const result = addressList.findIndex((item) => item.id === Number(val))
    onSelectDeliveryAddr(addressList[result])
  }

  return (
    <>
      <RadioGroup value={address} onChange={handleChange}>
        <VStack alignItems={"flex-start"}>
          {addressList.map((item) => (
            <Radio key={item.id} value={item.id} colorScheme={"teal"}>
              <HStack>
                <Heading size="sm">{item.name}</Heading>
                <Text>{item.address}</Text>
              </HStack>
            </Radio>
          ))}
        </VStack>
      </RadioGroup>
    </>
  )
}
