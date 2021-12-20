import React, { useState } from "react"
import { Input, InputGroup, InputRightAddon, Text } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"
import { MAX_LENGTH_PRODUCT_NAME } from "./constants"

export default function ProductNameInput() {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext()

  const [nameLength, setNameLength] = useState(0)

  const handleChangeName = (e) => {
    let formatName = e.target.value
    if (formatName.length > MAX_LENGTH_PRODUCT_NAME) {
      setValue("productName", formatName.substr(0, MAX_LENGTH_PRODUCT_NAME))
      setNameLength(MAX_LENGTH_PRODUCT_NAME)
    } else {
      setNameLength(formatName.length)
    }
  }

  return (
    <>
      <InputGroup>
        <Input
          type="text"
          focusBorderColor="teal.400"
          {...register("productName", {
            onChange: (e) => handleChangeName(e),
          })}
        />

        <InputRightAddon>
          {nameLength}/{MAX_LENGTH_PRODUCT_NAME}
        </InputRightAddon>
      </InputGroup>

      {errors.productName && (
        <Text color="red.500">{errors.productName?.message}</Text>
      )}
    </>
  )
}
