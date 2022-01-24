import React from "react"
import { FormControl, FormErrorMessage, Select } from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

export default function TrademarkSelect({ trademarks }) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const { t } = useTranslation()

  return (
    <FormControl isInvalid={errors.trademark}>
      <Controller
        name="trademark"
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <Select
            placeholder={t("productsManagement.addProductForm.selectTrademark")}
            focusBorderColor="teal.400"
            {...field}
          >
            {trademarks &&
              trademarks.map((trademark) => (
                <option key={trademark.id} value={trademark.id}>
                  {trademark.trademarkName}
                </option>
              ))}
          </Select>
        )}
      />

      {errors.trademark && (
        <FormErrorMessage>{errors.trademark?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}
