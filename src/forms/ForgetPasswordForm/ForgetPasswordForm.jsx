import React, { useEffect, useCallback } from "react"
import { useFormContext } from "react-hook-form"
import { Heading, Input, VStack, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"
import { useDispatch, useSelector } from "react-redux"
import { forgetPassword } from "store/slices/userSlice"

export default function ForgetPasswordForm() {
  const { register, handleSubmit } = useFormContext()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const onSubmit = useCallback(
    (data) => {
      dispatch(forgetPassword(data))
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
            Quên mật khẩu
          </Heading>
          <Input
            {...register("email", { require: true })}
            placeholder="Email"
            type="email"
          />
          <Button type="submit" colorScheme={"teal"} w="100%">
            Lấy lại mật khẩu
          </Button>
        </VStack>
      </form>
    </>
  )
}
