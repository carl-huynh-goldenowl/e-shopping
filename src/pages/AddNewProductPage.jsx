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

  //const hanleCancelForm = () => {}

  //const onSubmit = (data) => console.log(data)
  return (
    <FormProvider {...methods}>
      {/* <form onSubmit={methods.handleSubmit(onSubmit)}> */}
      <AddNewProductForm />
      {/* <GridItem colStart={9} colSpan={2}>
          <Button bg="white" w="100%" onClick={hanleCancelForm}>
            Hủy
          </Button>
        </GridItem>
        <GridItem colStart={11} colSpan={2}>
          <Button type="submit" colorScheme={"teal"} w="100%">
            Lưu
          </Button>
        </GridItem> */}
      {/* </form> */}
    </FormProvider>
  )
}
