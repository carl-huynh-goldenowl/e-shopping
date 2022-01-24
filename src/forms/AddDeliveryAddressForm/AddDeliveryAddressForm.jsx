import {
  FormControl,
  FormErrorMessage,
  GridItem,
  Input,
  SimpleGrid,
} from "@chakra-ui/react"
import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

export default function AddDeliveryAddressForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const { t } = useTranslation()

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
                placeholder={t("deliveryAddr.fullName")}
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
                placeholder={t("deliveryAddr.phoneNumber")}
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
                placeholder={t("deliveryAddr.address")}
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
