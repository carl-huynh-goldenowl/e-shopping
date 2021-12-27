import React, { useCallback, useState } from "react"
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useFormContext } from "react-hook-form"

export default function PasswordInput({ placeholderContent, registerName }) {
  const [show, setShow] = useState(false)
  const handleClick = useCallback(() => {
    setShow((prevState) => !prevState)
  }, [setShow])
  const { register } = useFormContext()
  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder={placeholderContent}
        {...register(registerName, { required: true })}
      />
      <InputRightElement width="4.5rem">
        <IconButton h="1.75rem" size="sm" onClick={handleClick}>
          {show ? <ViewOffIcon /> : <ViewIcon />}
        </IconButton>
      </InputRightElement>
    </InputGroup>
  )
}
