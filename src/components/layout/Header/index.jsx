import React from "react"
import { Container, Box } from "@chakra-ui/react"
import { SimpleGrid, GridItem } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box bg="gray.100">
      <Container maxW="container.xl">
        <SimpleGrid columns={12} spacing={1}>
          <GridItem colSpan={{ md: 2, sm: 1 }}>
            <Box bg="tomato" height="4rem">
              Logo
            </Box>
          </GridItem>
          <GridItem colSpan={{ md: 7, sm: 9 }}>
            <Box bg="tomato" height="4rem">
              Search bar
            </Box>
          </GridItem>
          <GridItem colSpan={{ md: 2, sm: 1 }}>
            <Box bg="tomato" height="4rem">
              Account
            </Box>
          </GridItem>
          <GridItem colSpan={{ md: 1, sm: 1 }}>
            <Box bg="tomato" height="4rem">
              Cart
            </Box>
          </GridItem>
          <GridItem colStart={{ md: 3, sm: 2 }} colEnd={{ md: 10, sm: 11 }}>
            <Box bg="tomato" height="3rem">
              Keywords
            </Box>
          </GridItem>
          <GridItem colSpan={{ md: 3, sm: 2 }}>
            <Box bg="tomato" height="3rem">
              Feature
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Header
