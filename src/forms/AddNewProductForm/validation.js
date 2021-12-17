import * as yup from "yup"
import {
  MAX_LENGTH_PRODUCT_NAME,
  MIN_LENGTH_PRODUCT_NAME,
  MAX_PREPARE_TIME,
  MIN_PREPARE_TIME,
} from "./constants"

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

export default schema
