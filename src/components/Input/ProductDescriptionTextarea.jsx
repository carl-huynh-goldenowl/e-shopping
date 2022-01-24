import React from "react"
import { Textarea, FormControl, FormErrorMessage } from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"

export default function ProductDescriptionTextarea() {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <FormControl isInvalid={errors.description}>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Textarea {...field} focusBorderColor="teal.400" />
        )}
      />
      {errors.description && (
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}
