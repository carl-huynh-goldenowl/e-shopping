import React, { useState } from "react"
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"

export default function QuantityInput() {
  const [quantity, setQuantity] = useState(1)

  const handleClickAddIcon = () => {
    setQuantity(quantity + 1)
  }

  const handleClickMinusIcon = () => {
    setQuantity((preState) => {
      if (preState === 1) return preState
      else return preState - 1
    })
  }

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value >= 1 ? e.target.value : 1)
  }

  return (
    <InputGroup size="sm" borderColor="gray.300">
      <InputLeftAddon as="button" bg="white" onClick={handleClickMinusIcon}>
        <MinusIcon />
      </InputLeftAddon>
      <Input
        value={quantity}
        textAlign="center"
        type="number"
        onChange={handleChangeQuantity}
      />
      <InputRightAddon as="button" bg="white" onClick={handleClickAddIcon}>
        <AddIcon />
      </InputRightAddon>
    </InputGroup>
  )
}
