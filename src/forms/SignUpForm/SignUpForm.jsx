import React, { useCallback } from "react"
import { Controller, useFormContext } from "react-hook-form"
import {
  Heading,
  Input,
  VStack,
  Button,
  SimpleGrid,
  GridItem,
  Link,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react"
import PasswordInput from "components/Input/PasswordInput"
import { Link as ReactLink } from "react-router-dom"
import { Routes } from "routes/Routes"
import { useTranslation } from "react-i18next"

export default function SignUpForm() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormContext()
  const { t } = useTranslation()

  const onSubmit = useCallback(() => {}, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6} p="3rem">
          <Heading as="h3" size="lg" pb="1rem">
            {t("signUp")}
          </Heading>
          <FormControl isInvalid={errors.email}>
            <Controller
              name="email"
              control={control}
              // rules={{ require: true }}
              defaultValue={""}
              render={({ field }) => (
                <Input
                  placeholder="Email"
                  {...field}
                  focusBorderColor="teal.400"
                />
              )}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </FormControl>
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
