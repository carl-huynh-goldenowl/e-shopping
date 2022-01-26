import React, { useCallback, useEffect, useState } from "react"
import {
  Box,
  Center,
  SimpleGrid,
  GridItem,
  Image,
  useToast,
} from "@chakra-ui/react"
import SignInForm from "forms/SignInForm"
import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "forms/SignInForm/validation"
import LanguageSelect from "components/Select/LanguageSelect"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { signIn } from "store/slices/userSlice"
import { Routes } from "routes/Routes"
import useAuth from "./hooks/apiHooks/useAuth"
import { useQueryClient } from "react-query"
import { t } from "i18next"

export default function SignInPage() {
  const [isEnabled, setIsEnabled] = useState(false)
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const { state } = useLocation()
  const { isLoadingAuth, errorAuth, auth } = useAuth(
    methods.getValues("email"),
    methods.getValues("password"),
    isEnabled
  )
  const queryClient = useQueryClient()
  const toast = useToast()

  useEffect(() => {
    if (errorAuth) {
      toast({
        title: t(`validation.signInForm.${errorAuth.message}`),
        status: "error",
        duration: 2000,
        isClosable: true,
      })
      queryClient.clear()
    }
  }, [errorAuth])

  useEffect(() => {
    if (auth) dispatch(signIn(auth))
  }, [auth])

  useEffect(() => {
    setIsEnabled(false)
    queryClient.clear()
    if (user.isAdmin) {
      navigate(state?.from?.pathname || Routes.admin.path, { replace: true })
    } else if (user.isAuth) {
      navigate(state?.from?.pathname || Routes.home.path, {
        replace: true,
      })
    }
  }, [user.isAdmin, user.isAuth, navigate])

  const onSubmit = useCallback(() => {
    setIsEnabled(true)
  }, [])

  return (
    <Box>
      <SimpleGrid justifyContent={"flex-end"}>
        <GridItem margin={3} backgroundColor={"gray"} borderRadius={6}>
          <LanguageSelect />
        </GridItem>
      </SimpleGrid>
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
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <SignInForm isLoadingAuth={isLoadingAuth} />
              </form>
            </FormProvider>
          </GridItem>
        </SimpleGrid>
      </Center>
    </Box>
  )
}
