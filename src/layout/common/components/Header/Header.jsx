import React from "react"
//import { useState, useRef } from "react"
import { Container, Box } from "@chakra-ui/react"
import {
  SimpleGrid,
  GridItem,
  IconButton,
  Icon,
  Text,
  HStack,
} from "@chakra-ui/react"
import SearchBar from "./SearchBar"
import { Image } from "@chakra-ui/react"
import { MdOutlineShoppingCart, MdOutlineAccountCircle } from "react-icons/md"
import CatalogueSlider from "components/Slider"
import { useQuery } from "react-query"
import { getCatalogue } from "apis/products"

const Header = () => {
  const {
    isLoading,
    error,
    data: catalogue,
  } = useQuery("catalogue", getCatalogue)

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
            <HStack
              _hover={{
                background: "teal.500",
              }}
            >
              <Icon
                w="3rem"
                h="3rem"
                color="white"
                as={MdOutlineAccountCircle}
              />

              <Text fontSize="lg" isTruncated color="white">
                Carl Huynh
              </Text>
            </HStack>
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
          <CatalogueSlider catalogue={catalogue} />
        </Container>
      </Box>
    </Box>
  )
}

export default Header
