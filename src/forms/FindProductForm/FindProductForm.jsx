import {
  GridItem,
  SimpleGrid,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"
import schema from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"

export default function FindProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  })

  const onSubmit = () => {}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={12} spacingX={10} spacingY={6}>
        <GridItem colSpan={6}>
          <InputGroup>
            <InputLeftAddon>
              <Select border="none" _focus={"none"} {...register("field")}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </InputLeftAddon>
            <Input
              type="text"
              placeholder="Nhập vào"
              focusBorderColor="teal.400"
              {...register("keyword")}
            />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={6}>
          <SimpleGrid columns={12} alignItems={"center"}>
            <GridItem colSpan={3}>Danh mục</GridItem>
            <GridItem colSpan={9}>
              <Select
                placeholder="Chọn ngành hàng"
                focusBorderColor="teal.400"
                {...register("category")}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={6}>
          <SimpleGrid columns={12} alignItems={"center"}>
            <GridItem colSpan={3}>Kho hàng</GridItem>
            <GridItem colSpan={9}>
              <HStack>
                <Input
                  type="number"
                  placeholder="Nhập vào"
                  focusBorderColor="teal.400"
                  {...register("minStock")}
                />
                <Text>-</Text>
                <Input
                  type="number"
                  placeholder="Nhập vào"
                  focusBorderColor="teal.400"
                  {...register("maxStock")}
                />
              </HStack>
              {errors.minStock && (
                <Text color="red.500">{errors.minStock?.message}</Text>
              )}
              {errors.maxStock && (
                <Text color="red.500">{errors.maxStock?.message}</Text>
              )}
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={6}>
          <SimpleGrid columns={12} alignItems={"center"}>
            <GridItem colSpan={3}>Đã bán</GridItem>
            <GridItem colSpan={9}>
              <HStack>
                <Input
                  type="number"
                  placeholder="Nhập vào"
                  focusBorderColor="teal.400"
                  {...register("minSold")}
                />
                <Text>-</Text>
                <Input
                  type="number"
                  placeholder="Nhập vào"
                  focusBorderColor="teal.400"
                  {...register("maxSold")}
                />
              </HStack>
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={12}>
          <SimpleGrid columns={8} spacingX={6}>
            <GridItem colSpan={1}>
              <Button type="submit" colorScheme={"teal"} w="100%">
                Tìm
              </Button>
            </GridItem>
            <GridItem colSpan={1}>
              <Button variant={"outline"} w="100%" type="reset">
                Nhập lại
              </Button>
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </form>
  )
}
