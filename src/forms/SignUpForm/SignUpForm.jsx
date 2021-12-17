import React from "react"
import { useForm, Controller } from "react-hook-form"
import { Heading, Input, VStack, Button } from "@chakra-ui/react"

export default function SignUpForm() {
  const { control, handleSubmit } = useForm({
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
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                placeholder="Email"
                type="email"
                focusBorderColor="teal.400"
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                placeholder="Password"
                type="Password"
                focusBorderColor="teal.400"
                {...field}
              />
            )}
          />
          <Button type="submit" colorScheme={"teal"} w="100%">
            Sign up
          </Button>
        </VStack>
      </form>
    </>
  )
}
