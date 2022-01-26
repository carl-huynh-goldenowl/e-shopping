import React from "react"
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

export default function SignUpForm({ isLoadingAuth }) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const { t } = useTranslation()
  return (
    <VStack spacing={6} p="3rem">
      <Heading as="h3" size="lg" pb="1rem">
        {t("signIn")}
      </Heading>
      <FormControl isInvalid={errors.email}>
        <Controller
          name="email"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input {...field} placeholder="Email" type="email" />
          )}
        />
        {errors.email && (
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        )}
      </FormControl>
      <PasswordInput
        placeholderContent="Enter password"
        registerName="password"
        focusBorderColor="teal.400"
      />
      <Button
        isLoading={isLoadingAuth || false}
        spinnerPlacement="end"
        loadingText={t("signIn")}
        type="submit"
        colorScheme={"teal"}
        w="100%"
      >
        {t("signIn")}
      </Button>
      <SimpleGrid
        pt="1rem"
        spacingX={"5rem"}
        columns={2}
        justifyContent={"space-between"}
      >
        <GridItem>
          <Link as={ReactLink} to={Routes.home.path}>
            {t("homepage")}
          </Link>
        </GridItem>
        <GridItem>
          <Link as={ReactLink} to={Routes.forgetPassword.path}>
            {t("forgotPass")}?
          </Link>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}
