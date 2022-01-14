import React from "react"
import { Select, Text } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

export default function CategorySelect() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const { t } = useTranslation()

  return (
    <>
      <Select
        placeholder={t("productsManagement.addProductForm.selectTrademark")}
        focusBorderColor="teal.400"
        {...register("category", { require: true })}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      {errors.category && (
        <Text color="red.500">{errors.category?.message}</Text>
      )}
    </>
  )
}
