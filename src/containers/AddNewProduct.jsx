import React from "react"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import AddNewProductForm from "forms/AddNewProductForm/AddNewProductForm"
import schema from "forms/AddNewProductForm/validation"

export default function AddNewProduct() {
  const methods = useForm({
    criteriaMode: "all",
    resolver: yupResolver(schema),
    mode: "onBlur",
  })

  return (
    <FormProvider {...methods}>
      <AddNewProductForm />
    </FormProvider>
  )
}
