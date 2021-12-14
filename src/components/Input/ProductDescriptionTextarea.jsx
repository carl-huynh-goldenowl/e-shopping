import React from "react"
import { Textarea, Text } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"

export default function ProductDescriptionTextarea() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div>
      <Textarea
        focusBorderColor="teal.400"
        {...register("description", { required: true })}
      />
      {errors.description && (
        <Text color="red.500">{errors.description?.message}</Text>
      )}
    </div>
  )
}
