import React from "react"
import { Select, Text } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"

export default function ProductStatusSelect() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <Select focusBorderColor="teal.400" {...register("productStatus")}>
        <option value="new">Mới</option>
        <option value="secondHand">Đã sử dụng</option>
      </Select>
      {errors.productStatus && (
        <Text color="red.500">{errors.productStatus?.message}</Text>
      )}
    </>
  )
}
