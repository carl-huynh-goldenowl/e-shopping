import {
  GridItem,
  SimpleGrid,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
  HStack,
  Text,
  Button,
  Skeleton,
  FormControl,
} from "@chakra-ui/react"
import React, { useCallback } from "react"
import { Controller, useForm } from "react-hook-form"
import schema from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"
import { useTranslation } from "react-i18next"
import useSearchRange from "./hooks/apiHooks/useSearchRange"
import { getSearchRange } from "apis/admin"
import useTrademarks from "./hooks/apiHooks/useTrademarks"
import { getTrademarks } from "apis/products"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./styles.css"

export default function FindProductForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  })
  const { t } = useTranslation()
  const { isLoadingSearchRange, errorSearchRange, searchRange } =
    useSearchRange("searchRange", getSearchRange)
  const { isLoadingTrademarks, errorTrademarks, trademarks } = useTrademarks(
    "trademarks",
    getTrademarks
  )

  const onSubmit = useCallback(() => {}, [])

  const handleRetype = useCallback(() => {
    reset({
      startDate: "",
      endDate: "",
      minSold: "",
      maxSold: "",
    })
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={12} spacingX={10} spacingY={6}>
        <GridItem colSpan={6}>
          {isLoadingSearchRange ? (
            <Skeleton height="2rem" />
          ) : errorSearchRange ? (
            <Text color="tomato">
              {t("errors.searchRangeErr")}: {errorSearchRange.message}
            </Text>
          ) : null}
          {searchRange && (
            <InputGroup>
              <Controller
                name="searchRange"
                control={control}
                defaultValue={
                  searchRange?.length > 0 ? searchRange[0].id : null
                }
                render={({ field }) => (
                  <InputLeftAddon>
                    <Select border="none" {...field}>
                      {searchRange?.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {t(
                            "productsManagement.searchRangeSelect." + opt.value
                          )}
                        </option>
                      ))}
                    </Select>
                  </InputLeftAddon>
                )}
              />

              <Controller
                name="keyword"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <Input type="text" focusBorderColor="teal.400" {...field} />
                )}
              />
            </InputGroup>
          )}
        </GridItem>
        <GridItem colSpan={6}>
          <SimpleGrid columns={12} alignItems={"center"}>
            {isLoadingTrademarks ? (
              <GridItem colSpan={12}>
                <Skeleton height="2rem" />
              </GridItem>
            ) : errorTrademarks ? (
              <GridItem colSpan={12}>
                <Text color="tomato">
                  {t("errors.trademarkErr")}: {errorTrademarks.message}
                </Text>
              </GridItem>
            ) : null}

            {trademarks && (
              <>
                <GridItem colSpan={3}>
                  {t("productsManagement.trademark")}
                </GridItem>
                <GridItem colSpan={9}>
                  <Controller
                    name="category"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        placeholder={t("productsManagement.selectTrademark")}
                        focusBorderColor="teal.400"
                        {...field}
                      >
                        {trademarks.map((trademark) => (
                          <option key={trademark.id} value={trademark.id}>
                            {trademark.trademarkName}
                          </option>
                        ))}
                      </Select>
                    )}
                  />
                </GridItem>
              </>
            )}
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={6}>
          <SimpleGrid columns={12} alignItems={"center"}>
            <GridItem colSpan={3}>{t("productsManagement.date")}</GridItem>
            <GridItem colSpan={9}>
              <HStack>
                <FormControl isInvalid={errors.startDate}>
                  <Controller
                    name="startDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <ReactDatePicker
                        {...field}
                        placeholderText={t(
                          "validation.findProductForm.startDate"
                        )}
                        onChange={field.onChange}
                        selected={field.value}
                      />
                    )}
                  />
                </FormControl>
                <Text>-</Text>
                <FormControl isInvalid={errors.endDate}>
                  <Controller
                    name="endDate"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <ReactDatePicker
                        {...field}
                        placeholderText={t(
                          "validation.findProductForm.endDate"
                        )}
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                    )}
                  />
                </FormControl>
              </HStack>
            </GridItem>
            <GridItem colSpan={12}>
              {errors.startDate && (
                <Text color="red">{errors.startDate?.message}</Text>
              )}
              {errors.endDate && (
                <Text color="red">{errors.endDate?.message}</Text>
              )}
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={6}>
          <SimpleGrid columns={12} alignItems={"center"}>
            <GridItem colSpan={3}>{t("productsManagement.sold")}</GridItem>
            <GridItem colSpan={9}>
              <HStack>
                <FormControl isInvalid={errors.minSold}>
                  <Controller
                    name="minSold"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input {...field} focusBorderColor="teal.400" />
                    )}
                  />
                </FormControl>
                <Text>-</Text>
                <FormControl isInvalid={errors.maxSold}>
                  <Controller
                    name="maxSold"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input {...field} focusBorderColor="teal.400" />
                    )}
                  />
                </FormControl>
              </HStack>
            </GridItem>
            <GridItem colSpan={12} height={"3rem"}>
              {errors.minSold && (
                <Text color="red">{errors.minSold?.message}</Text>
              )}
              {errors.maxSold && (
                <Text color="red">{errors.maxSold?.message}</Text>
              )}
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={12}>
          <SimpleGrid columns={8} spacingX={6}>
            <GridItem colSpan={1}>
              <Button type="submit" colorScheme={"teal"} w="100%">
                {t("productsManagement.findBtn")}
              </Button>
            </GridItem>
            <GridItem colSpan={1}>
              <Button
                variant={"outline"}
                w="100%"
                type="reset"
                onClick={handleRetype}
              >
                {t("productsManagement.retypeBtn")}
              </Button>
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </form>
  )
}
