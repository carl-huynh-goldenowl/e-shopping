import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import schema from "forms/AddNewProductForm/validation"
import AddNewProductForm from "forms/AddNewProductForm/AddNewProductForm"

export default function AddNewProductPage() {
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
