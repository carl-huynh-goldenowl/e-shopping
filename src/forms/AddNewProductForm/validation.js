import { t } from "i18next"
import * as yup from "yup"
import {
  MAX_LENGTH_PRODUCT_NAME,
  MIN_LENGTH_PRODUCT_NAME,
  MAX_PREPARE_TIME,
  MIN_PREPARE_TIME,
  MIN_LENGTH_PRODUCT_DESCRIPTION,
  MAX_LENGTH_PRODUCT_DESCRIPTION,
} from "./constants"
//`Tối đa ${MAX_LENGTH_PRODUCT_NAME} kí tự`
const schema = yup.object().shape({
  productName: yup
    .string()
    .required(t("validation.addProductForm.productNameRequired"))
    .max(
      MAX_LENGTH_PRODUCT_NAME,
      t("validation.addProductForm.maxCharacters", {
        count: MAX_LENGTH_PRODUCT_NAME,
      })
    )
    .min(
      MIN_LENGTH_PRODUCT_NAME,
      t("validation.addProductForm.minCharacters", {
        count: MIN_LENGTH_PRODUCT_NAME,
      })
    ),
  category: yup
    .string()
    .required(t("validation.addProductForm.trademarkRequired")),
  // mainImg: yup
  //   .string()
  //   .typeError("Ảnh bìa không được để trống.")
  //   .required("Ảnh bìa không được để trống."),
  description: yup
    .string()
    .required(t("validation.addProductForm.descriptionRequired"))
    .max(
      MAX_LENGTH_PRODUCT_DESCRIPTION,
      t("validation.addProductForm.maxCharacters", {
        count: MAX_LENGTH_PRODUCT_DESCRIPTION,
      })
    )
    .min(
      MIN_LENGTH_PRODUCT_DESCRIPTION,
      t("validation.addProductForm.minCharacters", {
        count: MIN_LENGTH_PRODUCT_DESCRIPTION,
      })
    ),
  prepareTime: yup
    .number()
    .typeError("")
    .required()
    .max(
      MAX_PREPARE_TIME,
      t("validation.addProductForm.maxCharacters", {
        count: MAX_PREPARE_TIME,
      })
    )
    .min(
      MIN_PREPARE_TIME,
      t("validation.addProductForm.minCharacters", {
        count: MIN_PREPARE_TIME,
      })
    ),
  productStatus: yup
    .string()
    .required(t("validation.addProductForm.productStatusRequuired")),
  productSKU: yup
    .string()
    .required(t("validation.addProductForm.productSKURequired")),
})

export default schema
