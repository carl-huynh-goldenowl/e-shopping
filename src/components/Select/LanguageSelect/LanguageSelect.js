import { Select } from "@chakra-ui/react"
import i18n from "i18n"
import React from "react"
import { LNGS } from "./constant"

export default function LanguageSelect() {
  const onChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
    localStorage.setItem("i18nextLng", e.target.value)
  }

  return (
    <Select onChange={onChangeLanguage} color="white">
      {LNGS.map((lng, index) => (
        <option
          key={index}
          style={{ color: "black" }}
          selected={localStorage.getItem("i18nextLng") === lng}
          value={lng}
        >
          {lng}
        </option>
      ))}
    </Select>
  )
}
