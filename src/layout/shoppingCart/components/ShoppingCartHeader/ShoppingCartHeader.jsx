import React from "react"
import {
  Container,
  Box,
  SimpleGrid,
  GridItem,
  Text,
  HStack,
  StackDivider,
} from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import AccountDropDownMenu from "components/Menu/AccountDropDownMenu"
import SearchBar from "forms/SearchForm/SearchBar"
import { Link } from "react-router-dom"
import { Routes } from "routes/Routes"

const ShoppingCartHeader = () => {
  const user = useSelector((state) => state.user)

  return (
    <Box bg="white">
      <Box bg="teal.300">
        <Container maxW="container.xl">
          <SimpleGrid p={1} justifyContent={"flex-end"}>
            <GridItem>
              <AccountDropDownMenu
                color={"white"}
                email={user.userInfo.email}
              />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
      <Container maxW="container.xl">
        <SimpleGrid columns={8} spacing={1} alignItems="center">
          <GridItem colSpan={{ md: 4, sm: 8 }}>
            <HStack divider={<StackDivider borderColor="gray.200" />}>
              <Link to={Routes.home.path}>
                <Image
                  py={"1rem"}
                  src="/images/golden_owl.svg"
                  alt="Golden Owl logo"
                />
              </Link>
              <Text fontSize="2xl" color={"teal.400"}>
                Giỏ hàng
              </Text>
            </HStack>
          </GridItem>
          <GridItem
            colStart={{ md: 5, sm: 0 }}
            colSpan={{ md: 4, sm: 8 }}
            paddingY={6}
          >
            <SearchBar />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default ShoppingCartHeader
