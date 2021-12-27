import * as yup from "yup"

const schema = yup.object().shape({
  email: yup.string().email().required("Chưa nhập email"),
  password: yup.string().required("Chưa nhập mật khẩu"),
  passwordConfirmation: yup
    .string()
    .required.oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp"),
})

export default schema
