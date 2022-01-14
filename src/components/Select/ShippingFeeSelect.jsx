import React from "react"
import { Select } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

export default function ShippingFeeSelect({ shippingArea }) {
  const { t } = useTranslation()

  return (
    <Select placeholder={t("productDetailPage.selectArea")}>
      {shippingArea.map((item) => (
        <option key={item.id} value={item.shippingFee}>
          {t("productDetailPage.optionArea", {
            radius: item.radius,
            shippingFee: item.shippingFee,
          })}
        </option>
      ))}
    </Select>
  )
}
