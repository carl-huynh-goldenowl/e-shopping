import * as yup from "yup"

const schema = yup.object().shape({
  field: yup.string(),
  keyword: yup.string(),
  category: yup.string(),
  minStock: yup
    .number()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue
    })
    .nullable()
    .min(0, "Phải lớn hơn hoặc bằng 0"),
  maxStock: yup
    .number()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue
    })
    .nullable()
    .max(0, "Phải lớn hơn hoặc bằng 0"),
  minSold: yup
    .number()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue
    })
    .nullable()
    .min(0, "Phải lớn hơn hoặc bằng 0"),
  maxSold: yup
    .number()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue
    })
    .nullable()
    .max(0, "Phải lớn hơn hoặc bằng 0"),
})

export default schema
