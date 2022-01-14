import React, { useCallback } from "react"
import { SimpleGrid, GridItem, Text, Button } from "@chakra-ui/react"
import BasicProductInfo from "containers/BasicProductInfo"
import { useNavigate } from "react-router-dom"
import CategorySelect from "components/Select/CategorySelect"
import OtherInfo from "containers/OrderInfo/OtherInfo"
import ProductNameInput from "components/Input/ProductNameInput"
import { useFormContext } from "react-hook-form"
import { Routes } from "routes/Routes"
import { useTranslation } from "react-i18next"

export default function AddNewProductForm() {
  let navigate = useNavigate()
  const { t } = useTranslation()

  const onSubmit = () => {}

  const hanleCancelForm = useCallback(() => {
    navigate(Routes.admin.path)
  }, [navigate])

  const { handleSubmit } = useFormContext()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={12} spacing={3}>
        <GridItem
          colSpan={12}
          bg="white"
          rounded={"md"}
          shadow={"xl"}
          p={6}
          id="product-name"
        >
          <SimpleGrid columns={12} spacing={3} alignItems={"center"}>
            <GridItem colSpan={[12, 12, 2]}>
              <Text>{t("productsManagement.productName")}</Text>
            </GridItem>
            <GridItem colSpan={[12, 12, 10]}>
              <ProductNameInput />
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem
          colSpan={12}
          bg="white"
          rounded={"md"}
          shadow={"xl"}
          p={6}
          id="category"
        >
          <SimpleGrid columns={12} spacing={3} alignItems={"center"}>
            <GridItem colSpan={[12, 12, 2]}>
              <Text>{t("productsManagement.trademark")}</Text>
            </GridItem>
            <GridItem colSpan={[12, 12, 10]}>
              <CategorySelect />
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem
          colSpan={12}
          bg="white"
          rounded={"md"}
          shadow={"xl"}
          p={6}
          id="basic-info"
        >
          <BasicProductInfo />
        </GridItem>
        <GridItem
          colSpan={12}
          bg="white"
          rounded={"md"}
          shadow={"xl"}
          p={6}
          id="other-info"
        >
          <OtherInfo />
        </GridItem>
        <GridItem colStart={9} colSpan={2}>
          <Button bg="white" w="100%" onClick={hanleCancelForm}>
            {t("productsManagement.addProductForm.cancelBtn")}
          </Button>
        </GridItem>
        <GridItem colStart={11} colSpan={2}>
          <Button type="submit" colorScheme={"teal"} w="100%">
            {t("productsManagement.addProductForm.saveBtn")}
          </Button>
        </GridItem>
      </SimpleGrid>
    </form>
  )
}
