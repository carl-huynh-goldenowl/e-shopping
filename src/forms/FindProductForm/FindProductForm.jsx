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
} from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"
import schema from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"
import { useTranslation } from "react-i18next"
import useSearchRange from "./hooks/apiHooks/useSearchRange"
import { getSearchRange } from "apis/admin"
import useTrademarks from "./hooks/apiHooks/useTrademarks"
import { getTrademarks } from "apis/products"

export default function FindProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
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

  const onSubmit = () => {}
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
              <InputLeftAddon>
                <Select border="none" {...register("field")}>
                  {searchRange?.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {t("productsManagement.searchRangeSelect." + opt.value)}
                    </option>
                  ))}
                </Select>
              </InputLeftAddon>
              <Input
                type="text"
                focusBorderColor="teal.400"
                {...register("keyword")}
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
                  <Select
                    placeholder={t("productsManagement.selectTrademark")}
                    focusBorderColor="teal.400"
                    {...register("category")}
                  >
                    {trademarks.map((trademark) => (
                      <option
                        key={trademark.id}
                        value={trademark.trademarkName}
                      >
                        {trademark.trademarkName}
                      </option>
                    ))}
                  </Select>
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
                <Input
                  type="number"
                  focusBorderColor="teal.400"
                  {...register("minStock")}
                />
                <Text>-</Text>
                <Input
                  type="number"
                  focusBorderColor="teal.400"
                  {...register("maxStock")}
                />
              </HStack>
              {errors.minStock && (
                <Text color="red.500">{errors.minStock?.message}</Text>
              )}
              {errors.maxStock && (
                <Text color="red.500">{errors.maxStock?.message}</Text>
              )}
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={6}>
          <SimpleGrid columns={12} alignItems={"center"}>
            <GridItem colSpan={3}>{t("productsManagement.sold")}</GridItem>
            <GridItem colSpan={9}>
              <HStack>
                <Input
                  type="number"
                  focusBorderColor="teal.400"
                  {...register("minSold")}
                />
                <Text>-</Text>
                <Input
                  type="number"
                  focusBorderColor="teal.400"
                  {...register("maxSold")}
                />
              </HStack>
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
              <Button variant={"outline"} w="100%" type="reset">
                {t("productsManagement.retypeBtn")}
              </Button>
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </form>
  )
}
