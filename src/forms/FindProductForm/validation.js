import { t } from "i18next"
import * as yup from "yup"

const schema = yup.object().shape({
  field: yup.string(),
  keyword: yup.string(),
  category: yup.string(),
  // minStock: yup
  //   .number()
  //   .transform((currentValue, originalValue) => {
  //     return originalValue === "" ? null : currentValue
  //   })
  //   .nullable()
  //   .min(0, "Phải lớn hơn hoặc bằng 0"),
  // maxStock: yup
  //   .number()
  //   .transform((currentValue, originalValue) => {
  //     return originalValue === "" ? null : currentValue
  //   })
  //   .nullable()
  //   .max(0, "Phải lớn hơn hoặc bằng 0"),
  minSold: yup
    .number()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue
    })
    .nullable()
    .min(0, t("validation.findProductForm.rangeSold")),
  maxSold: yup
    .number()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue
    })
    .nullable()
    .max(0, t("validation.findProductForm.rangeSold")),
})

export default schema
