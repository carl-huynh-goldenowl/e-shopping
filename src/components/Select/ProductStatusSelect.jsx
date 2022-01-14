import React from "react"
import { Select, Text } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

export default function ProductStatusSelect({ productStatusData }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const { t } = useTranslation()

  return (
    <>
      <Select focusBorderColor="teal.400" {...register("productStatus")}>
        {productStatusData?.map((item) => (
          <option key={item.id} value={item.id}>
            {t("productsManagement.producStatus." + item.status)}
          </option>
        ))}
      </Select>
      {errors.productStatus && (
        <Text color="red.500">{errors.productStatus?.message}</Text>
      )}
    </>
  )
}
