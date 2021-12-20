import React from "react"
//import { useState, useRef } from "react"
import { Container, Box } from "@chakra-ui/react"
import { SimpleGrid, GridItem, Icon, Text, HStack } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { MdOutlineAccountCircle } from "react-icons/md"

const AdminHeader = () => {
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
          <GridItem colStart={11} colSpan={2}>
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
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default AdminHeader
