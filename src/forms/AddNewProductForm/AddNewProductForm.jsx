import React from "react"
import { SimpleGrid, GridItem, Button, Text } from "@chakra-ui/react"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
// import BasicProductInfo from "../../containers/BasicProductInfo"
import { useNavigate } from "react-router-dom"
import schema from "./validation"
import BasicProductInfo from "containers/BasicProductInfo"
import CategorySelect from "components/Select/CategorySelect"
import OtherInfo from "containers/OtherInfo"
import ProductNameInput from "components/Input/ProductNameInput"

export default function AddNewProduct() {
  const methods = useForm({
    criteriaMode: "all",
    resolver: yupResolver(schema),
    mode: "onBlur",
  })
  // const { reset } = useForm()
  let navigate = useNavigate()

  const onSubmit = () => {}

  const hanleCancelForm = () => {
    //reset({ productName: "a" })
    navigate("/admin/products")
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                <Text>Tên sản phẩm</Text>
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
                <Text>Danh mục</Text>
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
              Hủy
            </Button>
          </GridItem>
          <GridItem colStart={11} colSpan={2}>
            <Button type="submit" colorScheme={"teal"} w="100%">
              Lưu
            </Button>
          </GridItem>
        </SimpleGrid>
      </form>
    </FormProvider>
  )
}
