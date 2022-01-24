import React from "react"
import { Box, Center, SimpleGrid, GridItem, Image } from "@chakra-ui/react"
import SignUpForm from "forms/SignUpForm/SignUpForm"
import { FormProvider, useForm } from "react-hook-form"
import LanguageSelect from "components/Select/LanguageSelect"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "forms/SignUpForm/validation"

export default function SignUpPage() {
  const methods = useForm({
    resolver: yupResolver(schema),
  })
  return (
    <Box>
      <SimpleGrid justifyContent={"flex-end"}>
        <GridItem margin={3} backgroundColor={"gray"} borderRadius={6}>
          <LanguageSelect />
        </GridItem>
      </SimpleGrid>
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
