import React from "react"
import { Input, Text } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"

export default function ProductSKUInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <Input {...register("productSKU")} focusBorderColor="teal.400" />
      {errors.productSKU && (
        <Text color="red.500">{errors.productSKU?.message}</Text>
      )}
    </>
  )
}
