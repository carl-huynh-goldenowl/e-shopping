import React from "react"
import { Container, Box } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box bg="gray.100">
      <Container maxW="container.xl">
        <Flex align="center">
          <Box w="20%" h="5rem" bg="gray.400">
            Logo
          </Box>
          <Box w="50%" h="5rem" bg="gray.300">
            Search bar
          </Box>
          <Box w="15%" h="5rem" bg="gray.200">
            Account
          </Box>
          <Box w="15%" h="5rem" bg="gray.400">
            Cart
          </Box>
        </Flex>
        <Flex direction="row" align="center">
          <Box w="20%"></Box>
          <Box w="50%" h="4rem" bg="gray.400">
            Keywords
          </Box>
          <Box w="30%" h="4rem" bg="gray.300">
            Feature
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
