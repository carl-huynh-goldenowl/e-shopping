import React, { useState } from "react"
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

export default function PasswordInput() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <IconButton h="1.75rem" size="sm" onClick={handleClick}>
          {show ? <ViewOffIcon /> : <ViewIcon />}
        </IconButton>
      </InputRightElement>
    </InputGroup>
  )
}
