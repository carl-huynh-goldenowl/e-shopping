import React from "react"
import { SimpleGrid, GridItem, Text, Heading } from "@chakra-ui/react"
import ProductPicInputList from "components/Input/ProductPicInputList"
import ProductDescriptionTextarea from "components/Input/ProductDescriptionTextarea"
import { useTranslation } from "react-i18next"

export default function BasicProductInfo() {
  const { t } = useTranslation()

  return (
    <>
      <Heading as="h5" size="sm">
        {t("productsManagement.basicInfo")}
      </Heading>
      <SimpleGrid
        columns={12}
        spacing={3}
        alignItems={"flex-start"}
        pt="2rem"
        spacingY={[10, 5]}
      >
        <GridItem colSpan={[12, 12, 2]}>
          <Text> {t("productsManagement.addProductForm.productPicture")}</Text>
        </GridItem>
        <GridItem colSpan={[12, 12, 10]}>
          <ProductPicInputList />
        </GridItem>
        <GridItem colSpan={[12, 12, 2]}>
          <Text>{t("productsManagement.addProductForm.description")}</Text>
        </GridItem>
        <GridItem colSpan={[12, 12, 10]}>
          <ProductDescriptionTextarea />
        </GridItem>
      </SimpleGrid>
    </>
  )
}
