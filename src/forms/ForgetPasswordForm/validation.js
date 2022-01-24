import { t } from "i18next"
import * as yup from "yup"

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(t("validation.signInForm.emailRequired")),
})

export default schema
