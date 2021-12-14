import React, { useState } from "react"
import { HStack, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"

export default function PreOrderRadioGroup() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const [orderType, setOrderType] = useState("")

  const handleChangePrepareTime = (e) => {
    setOrderType(e.target.value)
  }

  return (
    <>
      <RadioGroup defaultValue="noPreOrder">
        <Stack spacing={5} direction="row">
          <Radio
            colorScheme="teal"
            {...register("orderType", {
              onChange: (e) => setOrderType(e.target.value),
            })}
            value="noPreOrder"
          >
            Không
          </Radio>
          <Radio colorScheme="teal" {...register("orderType")} value="preOrder">
            Đồng ý
          </Radio>
        </Stack>
      </RadioGroup>
      {orderType === "noPreOrder" ? (
        <Text>
          Tôi sẽ gửi hàng trong 2 ngày (không bao gồm các ngày nghỉ lễ, Tết và
          những ngày đơn vị vận chuyển không làm việc)
        </Text>
      ) : (
        <HStack justifyContent={"left"}>
          <Text>Tôi cần thời gian chuẩn bị hàng là </Text>
          <Input
            textAlign={"center"}
            w="5rem"
            {...register("prepareTime", {
              value: 7,
              onChange: (e) => handleChangePrepareTime(e),
            })}
            type="number"
          />
          <Text>ngày (tối thiểu: 7 ngày - tối đa: 15 ngày)</Text>
        </HStack>
      )}
      {errors.prepareTime && (
        <Text color="red.500">{errors.prepareTime?.message}</Text>
      )}
    </>
  )
}
