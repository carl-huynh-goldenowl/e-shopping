import { t } from "i18next"
import * as yup from "yup"

const phoneRegExp =
  /^((\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  name: yup
    .string()
    .required(t("validation.addDeliveryAddressForm.fullNameRequired")),
  // .transform((currentValue, originalValue) => {
  //   return originalValue === "" ? null : currentValue
  // })
  // .nullable(),
  phoneNumber: yup
    .string()
    .required(t("validation.addDeliveryAddressForm.phoneNumberRequired"))
    .matches(
      phoneRegExp,
      t("validation.addDeliveryAddressForm.phoneNumberMatch")
    ),
  address: yup
    .string()
    .required(t("validation.addDeliveryAddressForm.addressRequired")),
})

export default schema
