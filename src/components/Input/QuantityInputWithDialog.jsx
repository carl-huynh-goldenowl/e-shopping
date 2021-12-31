import React, { useCallback, useEffect, useState } from "react"
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { useDispatch } from "react-redux"
import { setIsOpenDeleteProductDialog } from "store/slices/deleteProductSlice"

export default function QuantityInput({
  defaultValue = 1,
  handleChangeQty,
  productId,
}) {
  const [quantity, setQuantity] = useState(defaultValue)
  //const productId = useSelector((state) => state.deleteProduct.productId)
  const dispatch = useDispatch()

  const handleClickAddIcon = useCallback(() => {
    setQuantity((preState) => Number(preState) + 1)
  }, [setQuantity])

  const handleClickMinusIcon = useCallback(() => {
    setQuantity((preState) => {
      if (preState <= 1) {
        dispatch(
          setIsOpenDeleteProductDialog({ isOpen: true, productId: productId })
        )
        return 1
      } else return preState - 1
    })
  }, [dispatch])

  const handleChangeQuantity = useCallback((e) => {
    if (e.target.value) {
      const val = parseInt(e.target.value)

      if (val <= 0) {
        dispatch(
          setIsOpenDeleteProductDialog({ isOpen: true, productId: productId })
        )
        setQuantity(1)
      } else setQuantity(val)
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
