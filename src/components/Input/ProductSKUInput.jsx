import React from "react"
import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"

export default function ProductSKUInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <FormControl isInvalid={errors.productSKU}>
      <Controller
        name="productSKU"
        control={control}
        defaultValue={""}
        render={({ field }) => <Input {...field} focusBorderColor="teal.400" />}
      />

      {errors.productSKU && (
        <FormErrorMessage>{errors.productSKU?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}
