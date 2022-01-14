import React, { useState } from "react"
import { HStack, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

export default function PreOrderRadioGroup() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const [orderType, setOrderType] = useState("")
  const { t } = useTranslation()

  const handleChangePrepareTime = (e) => {
    setOrderType(e.target.value)
  }

  return (
    <>
      <RadioGroup defaultValue="noPreOrder">
        <Stack spacing={5} direction="row">
          <Radio
            colorScheme="teal"
            {...register("orderType", {
              onChange: (e) => setOrderType(e.target.value),
            })}
            value="noPreOrder"
          >
            {t("productsManagement.addProductForm.noRadio")}
          </Radio>
          <Radio colorScheme="teal" {...register("orderType")} value="preOrder">
            {t("productsManagement.addProductForm.yesRadio")}
          </Radio>
        </Stack>
      </RadioGroup>
      {orderType === "noPreOrder" ? (
        <Text>{t("productsManagement.addProductForm.contentWithNoRadio")}</Text>
      ) : (
        <HStack justifyContent={"left"}>
          <Text>
            {t("productsManagement.addProductForm.contentWithYesRadio")}{" "}
          </Text>
          <Input
            textAlign={"center"}
            w="5rem"
            {...register("prepareTime", {
              value: 7,
              onChange: (e) => handleChangePrepareTime(e),
            })}
            type="number"
          />
          <Text>{t("productsManagement.addProductForm.daysRange")}</Text>
        </HStack>
      )}
      {errors.prepareTime && (
        <Text color="red.500">{errors.prepareTime?.message}</Text>
      )}
    </>
  )
}
