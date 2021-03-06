import React from "react"
import { Box, Center, SimpleGrid, GridItem, Image } from "@chakra-ui/react"
import SignInForm from "forms/SignInForm"
import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "forms/SignInForm/validation"

export default function SignUpPage() {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  })

  return (
    <Box>
      <Center>
        <SimpleGrid spacing={6} pos="absolute" top="20%">
          <GridItem>
            <Box>
              <Image
                src="/images/golden_owl.svg"
                alt="Golden Owl logo"
                m="auto"
                w="auto"
              />
            </Box>
          </GridItem>
          <GridItem bg="white" rounded={"md"} shadow={"xl"}>
            <FormProvider {...methods}>
              <SignInForm />
            </FormProvider>
          </GridItem>
        </SimpleGrid>
      </Center>
    </Box>
  )
}
