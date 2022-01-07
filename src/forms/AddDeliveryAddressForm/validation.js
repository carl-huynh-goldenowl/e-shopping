import * as yup from "yup"

const phoneRegExp =
  /^((\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên người nhận"),
  // .transform((currentValue, originalValue) => {
  //   return originalValue === "" ? null : currentValue
  // })
  // .nullable(),
  phoneNumber: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(phoneRegExp, "Số điện thoại không hợp lệ"),
  address: yup.string().required("Vui lòng nhập địa chỉ"),
})

export default schema
