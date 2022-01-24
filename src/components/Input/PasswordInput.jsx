import React, { useCallback, useState } from "react"
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Controller, useFormContext } from "react-hook-form"

export default function PasswordInput({ placeholderContent, registerName }) {
  const [show, setShow] = useState(false)
  const handleClick = useCallback(() => {
    setShow((prevState) => !prevState)
  }, [setShow])
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={errors[registerName]}>
      <Controller
        name={registerName}
        control={control}
        render={({ field }) => (
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder={placeholderContent}
              {...field}
            />
            <InputRightElement width="4.5rem">
              <IconButton h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </IconButton>
            </InputRightElement>
          </InputGroup>
        )}
      />
      {errors[registerName] && (
        <FormErrorMessage>{errors[registerName]?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}
