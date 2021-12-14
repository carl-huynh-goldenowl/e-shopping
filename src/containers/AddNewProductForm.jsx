import React from "react"
import { SimpleGrid, GridItem, Button, Text } from "@chakra-ui/react"
import { useForm, FormProvider } from "react-hook-form"
import ProductNameInput from "../components/Input/ProductNameInput"
import CategorySelect from "../components/Select/CategorySelect"
import OtherInfo from "./OtherInfo"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {
  MAX_LENGTH_PRODUCT_NAME,
  MIN_LENGTH_PRODUCT_NAME,
  MAX_PREPARE_TIME,
  MIN_PREPARE_TIME,
} from "../constants/formConstant"
import BasicProductInfo from "./BasicProductInfo"
import { useNavigate } from "react-router-dom"

const schema = yup.object().shape({
  productName: yup
    .string()
    .required("Tên sản phẩm không được để trống.")
    .max(MAX_LENGTH_PRODUCT_NAME, `Tối đa ${MAX_LENGTH_PRODUCT_NAME} kí tự`)
    .min(MIN_LENGTH_PRODUCT_NAME, `Tối thiểu ${MIN_LENGTH_PRODUCT_NAME} kí tự`),
  category: yup.string().required("Chưa chọn danh mục sản phẩm"),
  // mainImg: yup
  //   .string()
  //   .typeError("Ảnh bìa không được để trống.")
  //   .required("Ảnh bìa không được để trống."),
  description: yup
    .string()
    .required("Mô tả sản phẩm không được để trống.")
    .max(MAX_LENGTH_PRODUCT_NAME, `Tối đa ${MAX_LENGTH_PRODUCT_NAME} kí tự`)
    .min(MIN_LENGTH_PRODUCT_NAME, `Tối thiểu ${MIN_LENGTH_PRODUCT_NAME} kí tự`),
  prepareTime: yup
    .number()
    .typeError("Giá trị nhập vào phải là số")
    .required("Thời gian chuẩn bị hàng không được để trống.")
    .max(MAX_PREPARE_TIME, `Tối đa ${MAX_PREPARE_TIME} ngày`)
    .min(MIN_PREPARE_TIME, `Tối thiểu ${MIN_PREPARE_TIME} ngày`),
  productStatus: yup.string().required("Tình trạng không được để trống."),
  productSKU: yup.string().required("SKU sản phẩm không được để trống."),
})

export default function AddNewProduct() {
  const methods = useForm({
    criteriaMode: "all",
    resolver: yupResolver(schema),
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
          <GridItem colSpan={12} bg="white" rounded={"md"} shadow={"xl"} p={6}>
            <SimpleGrid columns={12} spacing={3} alignItems={"center"}>
              <GridItem colSpan={[12, 12, 2]}>
                <Text>Tên sản phẩm</Text>
              </GridItem>
              <GridItem colSpan={[12, 12, 10]}>
                <ProductNameInput />
              </GridItem>
            </SimpleGrid>
          </GridItem>
          <GridItem colSpan={12} bg="white" rounded={"md"} shadow={"xl"} p={6}>
            <SimpleGrid columns={12} spacing={3} alignItems={"center"}>
              <GridItem colSpan={[12, 12, 2]}>
                <Text>Danh mục</Text>
              </GridItem>
              <GridItem colSpan={[12, 12, 10]}>
                <CategorySelect />
              </GridItem>
            </SimpleGrid>
          </GridItem>
          <GridItem colSpan={12} bg="white" rounded={"md"} shadow={"xl"} p={6}>
            <BasicProductInfo />
          </GridItem>
          <GridItem colSpan={12} bg="white" rounded={"md"} shadow={"xl"} p={6}>
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
