import React from "react"
import { Container, Box, Flex } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box bg="gray.100">
      <Container maxW="container.xl">
        <Flex align="center">
          <Box w="50%" h="20rem" bg="gray.300">
            Info
          </Box>
          <Flex w="50%" flexDirection="column">
            <Box w="100%" h="8rem" bg="gray.200">
              Sign up to receive email
            </Box>
            <Flex>
              <Box w="50%" h="12rem" bg="gray.500">
                Hotline
              </Box>
              <Box w="50%" h="12rem" bg="gray.300">
                Search bar
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Box w="100%" h="6rem" bg="gray.400">
            Catalogue
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
