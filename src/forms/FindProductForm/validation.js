import { t } from "i18next"
import * as yup from "yup"

const schema = yup.object().shape({
  field: yup.string(),
  keyword: yup.string(),
  category: yup.string(),
  startDate: yup
    .date()
    .nullable()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue
    }),
  endDate: yup
    .date()
    .nullable()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue
    })
    .when("startDate", (startDate, schema) =>
      startDate
        ? schema.min(startDate, t("validation.findProductForm.endDateInvalid"))
        : schema
    ),
  minSold: yup
    .number()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue
    })
    .nullable()
    .min(0, t("validation.findProductForm.rangeSold")),
  maxSold: yup
    .number("Number")
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue
    })
    .nullable()
    .min(0, t("validation.findProductForm.rangeSold"))
    .when("minSold", (minSold, schema) =>
      minSold
        ? schema.min(minSold, t("validation.findProductForm.maxSoldInvalid"))
        : schema
    ),
})

export default schema
