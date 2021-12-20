import React, { useCallback, useContext, useEffect } from "react"
import { useFormContext } from "react-hook-form"
import { Heading, Input, VStack, Button } from "@chakra-ui/react"
import PasswordInput from "components/Input/PasswordInput"
import { AuthContext } from "context/authContext"
import { useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"

export default function SignUpForm() {
  const { register, handleSubmit } = useFormContext()
  const { authState, authDispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = useCallback(() => {
    authDispatch({ type: "signInAsAdmin", isAuth: true, isAdmin: true })
  }, [authDispatch])

  useEffect(() => {
    if (authState.isAdmin) {
      navigate(Routes.admin.path, { replace: true })
    } else if (authState.isAuth) {
      navigate(Routes.home.path, { replace: true })
    }
  }, [authState, navigate])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6} p="3rem">
          <Heading as="h3" size="lg" pb="1rem">
            Login
          </Heading>
          <Input
            {...register("email", { require: true })}
            placeholder="Email"
            type="email"
          />
          <PasswordInput focusBorderColor="teal.400" />
          <Button type="submit" colorScheme={"teal"} w="100%">
            Login
          </Button>
        </VStack>
      </form>
    </>
  )
}
