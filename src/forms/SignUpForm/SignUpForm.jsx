import React from "react"
import { useFormContext } from "react-hook-form"
import { Heading, Input, VStack, Button } from "@chakra-ui/react"
import PasswordInput from "components/Input/PasswordInput"

export default function SignUpForm() {
  const { register, handleSubmit } = useFormContext({
    defaultValues: {
      email: "",
    },
  })

  // const onSubmit = (data) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit()}>
        <VStack spacing={6} p="3rem">
          <Heading as="h3" size="lg" pb="1rem">
            Sign up
          </Heading>

          <Input
            placeholder="Email"
            {...register("email", { required: true })}
            type="email"
            focusBorderColor="teal.400"
          />

          <PasswordInput focusBorderColor="teal.400" />
          {/* <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                placeholder="Password"
                type="password"
                focusBorderColor="teal.400"
                {...field}
              />
            )}
          /> */}

          <Button type="submit" colorScheme={"teal"} w="100%">
            Sign up
          </Button>
        </VStack>
      </form>
    </>
  )
}
