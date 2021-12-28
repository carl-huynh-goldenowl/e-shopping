import {
  Button,
  GridItem,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  SimpleGrid,
  Image,
  Text,
  Center,
  Box,
} from "@chakra-ui/react"
import React, { useCallback } from "react"
import { MdOutlineShoppingCart } from "react-icons/md"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Routes } from "routes"
import replacePathFmt from "./helpers"

const Product = ({ id, name, pictureUrl, discountPrice }) => {
  const url = replacePathFmt(Routes.home.routes.productDetail.path, id)
  return (
    <Link to={url}>
      <SimpleGrid
        columns={12}
        alignItems={"center"}
        spacing={3}
        _hover={{ bg: "gray.100" }}
      >
        <GridItem colSpan={2} p={2}>
          <Image w="2rem" h="2rem" src={pictureUrl} />
        </GridItem>
        <GridItem colSpan={6}>
          <Text fontSize="sm" noOfLines={1}>
            {name}
          </Text>
        </GridItem>
        <GridItem colSpan={4} textAlign={"right"}>
          <Text fontSize="sm">{discountPrice}</Text>
        </GridItem>
      </SimpleGrid>
    </Link>
  )
}

export default function CartPopover() {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.cart)

  const handleRedirectToCart = useCallback(() => {
    navigate(Routes.shoppingCart.path)
  }, [navigate])

  if (cart.length === 0) {
    return (
      <Popover trigger="hover">
        <PopoverTrigger>
          <IconButton
            padding="2rem 1rem"
            borderRadius="50%"
            aria-label="Shopping cart"
            icon={<Icon w="2rem" h="2rem" as={MdOutlineShoppingCart} />}
          />
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody py="3rem">
              <Box>
                <Center>
                  <Image w="3rem" src="/images/empty_cart.png" />
                </Center>
              </Box>
              <Box textAlign={"center"}>
                <Text>Chưa có sản phẩm</Text>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    )
  } else
    return (
      <Popover trigger="hover">
        <PopoverTrigger>
          <IconButton
            padding="2rem 1rem"
            borderRadius="50%"
            aria-label="Shopping cart"
            icon={<Icon w="2rem" h="2rem" as={MdOutlineShoppingCart} />}
          />
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Sản phẩm mới thêm</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              {cart.map((product, index) => (
                <Product {...product} key={index} />
              ))}
            </PopoverBody>
            <PopoverFooter textAlign={"right"}>
              <Button colorScheme="teal" onClick={handleRedirectToCart}>
                Xem giỏ hàng
              </Button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    )
}
