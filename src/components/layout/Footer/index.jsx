import React from "react"
import { Container, Box, SimpleGrid, GridItem } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box bg="gray.100">
      <Container maxW="container.xl">
        <SimpleGrid columns={12} spacing={1}>
          <GridItem colSpan={{ md: 6, sm: 12 }}>
            <Box bg="tomato" height="20rem">
              Info
            </Box>
          </GridItem>
          <GridItem colSpan={{ md: 6, sm: 12 }}>
            <SimpleGrid columns={2} spacingX={1}>
              <GridItem colSpan={2}>
                <Box bg="tomato" height="8rem">
                  Sign up to receive email
                </Box>
              </GridItem>
              <GridItem colSpan={1}>
                <Box bg="tomato" height="12rem">
                  Hotline
                </Box>
              </GridItem>
              <GridItem colSpan={1}>
                <Box bg="tomato" height="12rem">
                  Licenses
                </Box>
              </GridItem>
            </SimpleGrid>
          </GridItem>
          <GridItem colSpan={12}>
            <Box bg="tomato" height="4rem">
              Catalogue
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Header
