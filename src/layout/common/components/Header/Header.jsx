import React, { useCallback } from "react"
import { Container, Box, Button } from "@chakra-ui/react"
import {
  SimpleGrid,
  GridItem,
  IconButton,
  Icon,
  HStack,
} from "@chakra-ui/react"
import SearchBar from "./SearchBar"
import { Image } from "@chakra-ui/react"
import { MdOutlineShoppingCart } from "react-icons/md"
import { getCategory } from "apis/products"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"
import AccountDropDownMenu from "components/Menu/AccountDropDownMenu"
import useCategory from "./hooks/apiHooks/useCategory"
import { CatalogueSlider } from "components/Slider"

const Header = () => {
  const {
    isLoading,
    error,
    data: category,
  } = useCategory("category", getCategory)
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  const handleSignIn = useCallback(() => {
    navigate(Routes.signIn.path, { replace: true })
  }, [navigate])

  const hanleSignUp = useCallback(() => {
    navigate(Routes.signUp.path)
  }, [navigate])

  if (isLoading) return <h6>Loading...</h6>

  if (error) return "An error has occurred: " + error.message

  return (
    <Box bg="teal.300">
      <Container maxW="container.xl">
        <SimpleGrid columns={12} spacing={1} alignItems="center">
          <GridItem colSpan={{ md: 2, sm: 1 }}>
            <Image src="/images/golden_owl.svg" alt="Golden Owl logo" />
          </GridItem>
          <GridItem colSpan={{ md: 7, sm: 9 }} padding={6}>
            <SearchBar />
          </GridItem>
          <GridItem colSpan={{ md: 2, sm: 1 }}>
            {user.isAuth ? (
              <AccountDropDownMenu email={user.userInfo.email} />
            ) : (
              <HStack>
                <Button variant="ghost" color={"white"} onClick={handleSignIn}>
                  Đăng nhập
                </Button>
                <Button variant="outline" color={"white"} onClick={hanleSignUp}>
                  Đăng ký
                </Button>
              </HStack>
            )}
          </GridItem>

          <GridItem colSpan={{ md: 1, sm: 1 }} textAlign="right">
            <IconButton
              padding="2rem 1rem"
              borderRadius="50%"
              aria-label="Shopping cart"
              icon={<Icon w="2rem" h="2rem" as={MdOutlineShoppingCart} />}
            />
          </GridItem>
        </SimpleGrid>
      </Container>
      <Box bg="white" py={1}>
        <Container maxW="container.xl" h="3rem">
          <CatalogueSlider category={category.data} />
        </Container>
      </Box>
    </Box>
  )
}

export default Header
