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
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()

  const onSubmit = () => {}

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6} p="3rem">
          <Heading as="h3" size="lg" pb="1rem">
            {t("signUp")}
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
            placeholderContent={t("password")}
            registerName="password"
            focusBorderColor="teal.400"
          />

          <PasswordInput
            placeholderContent={t("confirmPass")}
            registerName="passwordConfirmation"
            focusBorderColor="teal.400"
          />

          <Button type="submit" colorScheme={"teal"} w="100%">
            {t("signUp")}
          </Button>
          <SimpleGrid>
            <GridItem>
              <Link as={ReactLink} to={Routes.signIn.path}>
                {t("haveAccount")}
              </Link>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </form>
    </>
  )
}
