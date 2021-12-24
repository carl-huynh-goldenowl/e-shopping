import React, { useCallback, useEffect } from "react"
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
import { Link as ReactLink, useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "store/slices/userSlice"

export default function SignUpForm() {
  const { register, handleSubmit } = useFormContext()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const onSubmit = useCallback(
    (data) => {
      dispatch(
        signIn({
          userInfo: {
            email: data.email,
          },
        })
      )
    },
    [dispatch]
  )

  useEffect(() => {
    if (user.isAdmin) {
      navigate(Routes.admin.path, { replace: true })
    } else if (user.isAuth) {
      navigate(Routes.home.path, { replace: true })
    }
  }, [user, navigate])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6} p="3rem">
          <Heading as="h3" size="lg" pb="1rem">
            Sign in
          </Heading>
          <Input
            {...register("email", { require: true })}
            placeholder="Email"
            type="email"
          />
          <PasswordInput focusBorderColor="teal.400" />
          <Button type="submit" colorScheme={"teal"} w="100%">
            Sign in
          </Button>
          <SimpleGrid>
            <GridItem>
              <Link as={ReactLink} to={Routes.forgetPassword.path}>
                Quên mật khẩu?
              </Link>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </form>
    </>
  )
}
