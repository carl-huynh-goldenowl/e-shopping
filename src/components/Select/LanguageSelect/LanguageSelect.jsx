import { Select } from "@chakra-ui/react"
import i18n from "i18n"
import React, { useCallback, useEffect } from "react"
import { LNGS } from "./constant"

export default function LanguageSelect() {
  const onChangeLanguage = useCallback((e) => {
    i18n.changeLanguage(e.target.value)
    localStorage.setItem("i18nextLng", e.target.value)
  }, [])

  let lng = localStorage.getItem("i18nextLng")
  useEffect(() => {
    if (LNGS.indexOf(lng) === -1) {
      lng = "en"
      localStorage.setItem("i18nextLng", lng)
    }

    i18n.changeLanguage(lng)
  }, [])

  return (
    <Select onChange={onChangeLanguage} color="white" defaultValue={lng}>
      {LNGS.map((lng, index) => (
        <option
          key={index}
          style={{ color: "black" }}
          //selected={localStorage.getItem("i18nextLng") === lng}
          value={lng}
        >
          {lng}
        </option>
      ))}
    </Select>
  )
}
