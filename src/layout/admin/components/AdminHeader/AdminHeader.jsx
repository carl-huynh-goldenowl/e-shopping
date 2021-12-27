import React, { useCallback } from "react"
//import { useState, useRef } from "react"
import { Container, Box, Button } from "@chakra-ui/react"
import { SimpleGrid, GridItem, HStack } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import AccountDropDownMenu from "components/Menu/AccountDropDownMenu"
import useCategory from "layout/common/components/Header/hooks/apiHooks/useCategory"
import { getCategory } from "apis/products"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"

const AdminHeader = () => {
  const { isLoading, error } = useCategory("category", getCategory)
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  const handleSignIn = useCallback(() => {
    navigate(Routes.signIn.path, { replace: true })
  }, [navigate])

  const handleSignUp = useCallback(() => {
    navigate(Routes.signUp.path)
  }, [navigate])

  if (isLoading) return <h6>Loading...</h6>

  if (error) return "An error has occurred: " + error.message

  return (
    <Box bg="teal.300">
      <Container maxW="container.xl">
        <SimpleGrid
          alignItems="center"
          justifyContent="space-around"
          py="2rem"
          columns={12}
        >
          <GridItem colSpan={2}>
            <Image src="/images/golden_owl.svg" alt="Golden Owl logo" />
          </GridItem>
          <GridItem colStart={10} colSpan={3}>
            {user.isAuth ? (
              <AccountDropDownMenu email={user.userInfo.email} />
            ) : (
              <HStack>
                <Button variant="ghost" color={"white"} onClick={handleSignIn}>
                  Đăng nhập
                </Button>
                <Button
                  variant="outline"
                  color={"white"}
                  onClick={handleSignUp}
                >
                  Đăng ký
                </Button>
              </HStack>
            )}
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default AdminHeader
