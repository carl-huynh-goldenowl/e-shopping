import React from "react"
import { Box, Center, SimpleGrid, GridItem, Image } from "@chakra-ui/react"
import SignUpForm from "forms/LoginForm/LoginForm"

export default function SignUpPage() {
  return (
    <Box bg="gray.100">
      <Center w="100vw" h="100vh">
        <SimpleGrid w="30rem" spacing={6}>
          <GridItem>
            <Box>
              <Image
                src="/images/golden_owl.svg"
                alt="Golden Owl logo"
                m="auto"
                w="20rem"
              />
            </Box>
          </GridItem>
          <GridItem bg="white" rounded={"md"} shadow={"xl"}>
            <SignUpForm />
          </GridItem>
        </SimpleGrid>
      </Center>
    </Box>
  )
}
