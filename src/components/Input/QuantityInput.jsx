import React, { useCallback, useEffect, useState } from "react"
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"

export default function QuantityInput({ defaultValue = 1, handleChangeQty }) {
  const [quantity, setQuantity] = useState(defaultValue)

  const handleClickAddIcon = useCallback(() => {
    setQuantity((preState) => Number(preState) + 1)
  }, [setQuantity])

  const handleClickMinusIcon = useCallback(() => {
    setQuantity((preState) => {
      if (preState <= 1) return 1
      else return preState - 1
    })
  }, [setQuantity])

  const handleChangeQuantity = useCallback((e) => {
    if (e.target.value) {
      const val = parseInt(e.target.value)
      setQuantity(val)
    }
  }, [])

  useEffect(() => {
    handleChangeQty(quantity)
  }, [quantity])

  return (
    <InputGroup size="sm" borderColor="gray.300">
      <InputLeftAddon as="button" bg="white" onClick={handleClickMinusIcon}>
        <MinusIcon />
      </InputLeftAddon>
      <Input
        value={quantity}
        textAlign="center"
        type="number"
        step="1"
        min="1"
        pattern="\d*"
        onChange={handleChangeQuantity}
      />
      <InputRightAddon as="button" bg="white" onClick={handleClickAddIcon}>
        <AddIcon />
      </InputRightAddon>
    </InputGroup>
  )
}
