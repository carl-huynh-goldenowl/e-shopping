import React from "react"
import { SimpleGrid, GridItem, Text, Heading, Skeleton } from "@chakra-ui/react"
import PreOrderRadioGroup from "components/Input/PreOrderRadioGroup"
import ProductStatusSelect from "components/Select/ProductStatusSelect"
import ProductSKUInput from "components/Input/ProductSKUInput"
import { useTranslation } from "react-i18next"
import useProductStatus from "./hooks/apiHooks/useProductStatus"
import { getProductStatus } from "apis/products"

export default function OtherInfo() {
  const { t } = useTranslation()
  const { isLoadingProductStatus, errorProductStatus, productStatus } =
    useProductStatus("productStatus", getProductStatus)

  return (
    <>
      <Heading as="h5" size="sm">
        {t("productsManagement.otherInfo")}
      </Heading>
      <SimpleGrid
        columns={12}
        spacing={3}
        alignItems={"flex-start"}
        pt="2rem"
        spacingY={[10, 5]}
      >
        <GridItem colSpan={[12, 12, 2]}>
          <Text>{t("productsManagement.addProductForm.preOrder")}</Text>
        </GridItem>
        <GridItem colSpan={[12, 12, 10]}>
          <PreOrderRadioGroup />
        </GridItem>
        <GridItem colSpan={[12, 12, 2]}>
          <Text>{t("productsManagement.addProductForm.status")}</Text>
        </GridItem>
        <GridItem colSpan={[12, 12, 8, 6]}>
          {isLoadingProductStatus ? (
            <GridItem colSpan={12}>
              <Skeleton height="2rem" />
            </GridItem>
          ) : errorProductStatus ? (
            <GridItem colSpan={12}>
              <Text color="tomato">
                {t("error.trademarkErr")}: {errorProductStatus.message}
              </Text>
            </GridItem>
          ) : null}

          {productStatus && (
            <ProductStatusSelect productStatusData={productStatus} />
          )}
        </GridItem>
        <GridItem colStart={1} colEnd={[12, 12, 3, 3]}>
          <Text>{t("productsManagement.searchRangeSelect.productSKU")}</Text>
        </GridItem>
        <GridItem colSpan={[12, 12, 8, 6]}>
          <ProductSKUInput />
        </GridItem>
      </SimpleGrid>
    </>
  )
}
