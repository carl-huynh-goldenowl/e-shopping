import React from "react"
import { useFormContext } from "react-hook-form"
import {
  Heading,
  Input,
  VStack,
  Button,
  SimpleGrid,
  GridItem,
  Link,
} from "@chakra-ui/react"
import PasswordInput from "components/Input/PasswordInput"
import { Link as ReactLink } from "react-router-dom"
import { Routes } from "routes/Routes"

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext({
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = () => {}

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6} p="3rem">
          <Heading as="h3" size="lg" pb="1rem">
            Đăng ký
          </Heading>
          {errors.passwordConfirmation && (
            <p color="#fff000">{errors.passwordConfirmation?.message}</p>
          )}
          <Input
            placeholder="Email"
            {...register("email", { required: true })}
            type="email"
            focusBorderColor="teal.400"
          />

          <PasswordInput
            placeholderContent="Enter password"
            registerName="password"
            focusBorderColor="teal.400"
          />

          <PasswordInput
            placeholderContent="Confirm password"
            registerName="passwordConfirmation"
            focusBorderColor="teal.400"
          />

          <Button type="submit" colorScheme={"teal"} w="100%">
            Đăng ký
          </Button>
          <SimpleGrid>
            <GridItem>
              <Link as={ReactLink} to={Routes.signIn.path}>
                Đã có tài khoản?
              </Link>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </form>
    </>
  )
}
