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
import { Link as ReactLink, useLocation, useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "store/slices/userSlice"

export default function SignUpForm() {
  const { register, handleSubmit } = useFormContext()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const { state } = useLocation()

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
      navigate(state?.from?.pathname || Routes.home.path, {
        replace: true,
      })
    }
  }, [user.isAdmin, user.isAuth, navigate])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6} p="3rem">
          <Heading as="h3" size="lg" pb="1rem">
            Đăng nhập
          </Heading>
          <Input
            {...register("email", { require: true })}
            placeholder="Email"
            type="email"
          />
          <PasswordInput
            placeholderContent="Enter password"
            registerName="password"
            focusBorderColor="teal.400"
          />
          <Button type="submit" colorScheme={"teal"} w="100%">
            Đăng nhập
          </Button>
          <SimpleGrid
            pt="1rem"
            spacingX={"5rem"}
            columns={2}
            justifyContent={"space-between"}
          >
            <GridItem>
              <Link as={ReactLink} to={Routes.home.path}>
                Về trang chủ
              </Link>
            </GridItem>
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
