import React, { useCallback } from "react"
import { Container, Box, Button } from "@chakra-ui/react"
import { SimpleGrid, GridItem, HStack } from "@chakra-ui/react"
import SearchBar from "./SearchBar"
import { Image } from "@chakra-ui/react"
import { getCategory } from "apis/products"
import { useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"
import AccountDropDownMenu from "components/Menu/AccountDropDownMenu"
import useCategory from "./hooks/apiHooks/useCategory"
import { CatalogueSlider } from "components/Slider"
import CartPopover from "containers/CartPopover/CartPopover"
import { useTranslation } from "react-i18next"
import LanguageSelect from "components/Select/LanguageSelect"

const Header = () => {
  const {
    isLoading,
    error,
    data: category,
  } = useCategory("category", getCategory)
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  let location = useLocation()
  const { t } = useTranslation()

  const handleSignIn = useCallback(() => {
    navigate(Routes.signIn.path, {
      replace: true,
      state: { from: location },
    })
  }, [navigate])

  const handleSignUp = useCallback(() => {
    navigate(Routes.signUp.path)
  }, [navigate])

  if (isLoading) return <h6>Loading...</h6>

  if (error) return t("errors.errorHasOccurred") + error.message

  return (
    <Box bg="teal.300">
      <Container maxW="container.xl">
        <SimpleGrid columns={12} spacing={1} alignItems="center">
          <GridItem colSpan={{ md: 2, sm: 1 }}>
            <Link to={Routes.home.path}>
              <Image src="/images/golden_owl.svg" alt="Golden Owl logo" />
            </Link>
          </GridItem>
          <GridItem colSpan={{ md: 6, sm: 8 }} padding={6}>
            <SearchBar />
          </GridItem>
          <GridItem colSpan={{ md: 1, sm: 1 }} padding="0.1rem">
            <LanguageSelect />
          </GridItem>
          <GridItem colSpan={{ md: 2, sm: 1 }}>
            {user.isAuth ? (
              <AccountDropDownMenu
                color={"white"}
                email={user.userInfo.email}
              />
            ) : (
              <HStack>
                <Button variant="ghost" color={"white"} onClick={handleSignIn}>
                  {t("signIn")}
                </Button>
                <Button
                  variant="outline"
                  color={"white"}
                  onClick={handleSignUp}
                >
                  {t("signUp")}
                </Button>
              </HStack>
            )}
          </GridItem>

          <GridItem colSpan={{ md: 1, sm: 1 }} textAlign="right">
            <CartPopover />
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
