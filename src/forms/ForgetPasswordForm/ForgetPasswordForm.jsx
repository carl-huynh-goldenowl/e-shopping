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
//import { useNavigate } from "react-router-dom"
//import { Routes } from "routes/Routes"
import { useDispatch } from "react-redux"
import { forgetPassword } from "store/slices/userSlice"
import { useTranslation } from "react-i18next"
import { Link as ReactLink } from "react-router-dom"
import { Routes } from "routes/Routes"

export default function ForgetPasswordForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext()
  //const navigate = useNavigate()
  const dispatch = useDispatch()
  //const user = useSelector((state) => state.user)
  const { t } = useTranslation()

  const onSubmit = useCallback(
    (data) => {
      dispatch(forgetPassword(data))
    },
    [dispatch]
  )

  // useEffect(() => {
  //   if (user.isAdmin) {
  //     navigate(Routes.admin.path, { replace: true })
  //   } else if (user.isAuth) {
  //     navigate(Routes.home.path, { replace: true })
  //   }
  // }, [user, navigate])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6} p="3rem">
          <Heading as="h3" size="lg" pb="1rem">
            {t("forgotPass")}
          </Heading>
          <FormControl isInvalid={errors.email}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Email"
                  type="email"
                  w={"25rem"}
                />
              )}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </FormControl>
          <Button type="submit" colorScheme={"teal"} w="100%">
            {t("submit")}
          </Button>
          <SimpleGrid>
            <GridItem>
              <Link as={ReactLink} to={Routes.home.path}>
                {t("homepage")}
              </Link>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </form>
    </>
  )
}
