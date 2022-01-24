import React, { useCallback, useState } from "react"
import { HStack, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

export default function PreOrderRadioGroup() {
  const {
    formState: { errors },
    control,
  } = useFormContext()
  const [orderType, setOrderType] = useState("")
  const { t } = useTranslation()

  const onChange = useCallback((value) => {
    setOrderType(value)
  })

  return (
    <>
      <Controller
        name="orderType"
        control={control}
        defaultValue="noPreOrder"
        render={({ field }) => (
          <RadioGroup
            {...field}
            onChange={(value) => {
              onChange(value)
              field.onChange(value)
            }}
          >
            <Stack spacing={5} direction="row">
              <Radio colorScheme="teal" value="noPreOrder">
                {t("productsManagement.addProductForm.noRadio")}
              </Radio>
              <Radio colorScheme="teal" value="preOrder">
                {t("productsManagement.addProductForm.yesRadio")}
              </Radio>
            </Stack>
          </RadioGroup>
        )}
      />

      {orderType === "noPreOrder" ? (
        <Text>{t("productsManagement.addProductForm.contentWithNoRadio")}</Text>
      ) : (
        <HStack justifyContent={"left"}>
          <Text>
            {t("productsManagement.addProductForm.contentWithYesRadio")}{" "}
          </Text>

          <Controller
            name="prepareTime"
            control={control}
            defaultValue={7}
            render={({ field }) => (
              <Input
                textAlign={"center"}
                w="5rem"
                {...field}
                type="number"
                focusBorderColor="teal.400"
              />
            )}
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
