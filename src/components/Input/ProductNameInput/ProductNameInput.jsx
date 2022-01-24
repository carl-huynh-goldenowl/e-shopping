import React, { useState } from "react"
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"
import { MAX_LENGTH_PRODUCT_NAME } from "./constants"

export default function ProductNameInput() {
  const {
    control,
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
    <FormControl isInvalid={errors.productName}>
      <Controller
        name="productName"
        control={control}
        render={({ field }) => (
          <InputGroup {...field}>
            <Input
              type="text"
              focusBorderColor="teal.400"
              onChange={(e) => handleChangeName(e)}
            />

            <InputRightAddon>
              {nameLength}/{MAX_LENGTH_PRODUCT_NAME}
            </InputRightAddon>
          </InputGroup>
        )}
      />

      {errors.productName && (
        <FormErrorMessage>{errors.productName?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}
