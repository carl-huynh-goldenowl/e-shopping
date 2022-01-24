import React from "react"
import { Select } from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

export default function ProductStatusSelect({ productStatusData }) {
  const { control } = useFormContext()
  const { t } = useTranslation()

  return (
    <Controller
      name="productStatus"
      control={control}
      defaultValue={
        productStatusData?.length > 0 ? productStatusData[0].id : ""
      }
      render={({ field }) => (
        <Select focusBorderColor="teal.400" {...field}>
          {productStatusData?.map((item) => (
            <option key={item.id} value={item.id}>
              {t(
                "productsManagement.addProductForm.statusSelect." + item.status
              )}
            </option>
          ))}
        </Select>
      )}
    />
  )
}
