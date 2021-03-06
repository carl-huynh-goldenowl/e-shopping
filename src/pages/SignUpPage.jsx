import React from "react"
import { Box, Center, SimpleGrid, GridItem, Image } from "@chakra-ui/react"
import SignUpForm from "forms/SignUpForm/SignUpForm"
import { FormProvider, useForm } from "react-hook-form"

export default function SignUpPage() {
  const methods = useForm()
  return (
    <Box>
      <Center>
        <SimpleGrid spacing={6} pos={"absolute"} top="25%">
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
              <SignUpForm />
            </FormProvider>
          </GridItem>
        </SimpleGrid>
      </Center>
    </Box>
  )
}
