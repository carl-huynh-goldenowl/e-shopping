import { t } from "i18next"
import * as yup from "yup"

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(t("validation.signUpForm.emailRequired")),
  password: yup.string().required(t("validation.signUpForm.passwordRequired")),
  passwordConfirmation: yup
    .string()
    .required(t("validation.signUpForm.confirmPassRequired"))
    .oneOf(
      [yup.ref("password"), null],
      t("validation.signUpForm.confirmPassMatch")
    ),
})

export default schema
