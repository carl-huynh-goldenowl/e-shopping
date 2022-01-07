import {
  FormControl,
  FormErrorMessage,
  GridItem,
  Input,
  SimpleGrid,
} from "@chakra-ui/react"
import React, { useEffect } from "react"
import { Controller, useFormContext } from "react-hook-form"
import _ from "lodash"

export default function AddDeliveryAddressForm({ handleIsExistError }) {
  const {
    control,
    formState: { errors },
    defaultValue,
  } = useFormContext()
  console.log(errors, defaultValue)

  useEffect(() => {
    handleIsExistError(_.isEmpty(errors))
    console.log(_.isEmpty(errors))
  }, [errors])

  return (
    <SimpleGrid columns={12} spacing={3}>
      <GridItem colSpan={6}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl isInvalid={errors.name}>
              <Input
                {...field}
                placeholder="Họ và tên"
                focusBorderColor="teal.400"
              />
              {errors.name && (
                <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
              )}
            </FormControl>
          )}
        />
      </GridItem>
      <GridItem colSpan={6}>
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl isInvalid={errors.phoneNumber}>
              <Input
                {...field}
                placeholder="Số điện thoại"
                focusBorderColor="teal.400"
              />
              {errors.phoneNumber && (
                <FormErrorMessage>
                  {errors?.phoneNumber?.message}
                </FormErrorMessage>
              )}
            </FormControl>
          )}
        />
      </GridItem>
      <GridItem colSpan={12}>
        <Controller
          name="address"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl isInvalid={errors.address}>
              <Input
                {...field}
                placeholder="Địa chỉ"
                focusBorderColor="teal.400"
              />
              {errors.address && (
                <FormErrorMessage>{errors?.address?.message}</FormErrorMessage>
              )}
            </FormControl>
          )}
        />
      </GridItem>
    </SimpleGrid>
  )
}
