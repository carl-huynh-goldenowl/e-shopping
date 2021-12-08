import React from "react"
import { Select } from "@chakra-ui/react"

const shippingMethod = [
  { distance: "1km", fee: 5000 },
  { distance: "5km", fee: 20000 },
  { distance: "10km", fee: 100000 },
]

export default function ShippingFeeSelect() {
  return (
    <Select placeholder="Chọn khu vực">
      {shippingMethod.map((item, index) => (
        <option key={index} value={item.fee}>
          {"Bán kính " + item.distance + " - " + item.fee}₫
        </option>
      ))}
    </Select>
  )
}
