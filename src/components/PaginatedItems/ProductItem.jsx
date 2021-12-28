import React from "react"
import { Box, GridItem, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Link as ReactLink } from "react-router-dom"
//import { Link } from "@chakra-ui/layout"

export default function ProductItem({ product }) {
  return (
    <GridItem
      colSpan={[6, 4, 3, 2]}
      bg="white"
      rounded="md"
      shadow="xl"
      p="0.5rem"
      m="0.5rem"
      _hover={{
        border: "0.2rem solid",
        borderColor: "teal.300",
        textDecoration: "none",
        margin: "0.1",
      }}
    >
      <ReactLink
        // as={ReactLink}
        to={`products/${product.id}`}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Box>
          <Image
            //objectFit="cover"
            width="100%"
            h="11rem"
            src={product.pictureUrl}
            alt={product.name}
          />
        </Box>

        <Text fontSize="sm" noOfLines={2} style={{ minHeight: "2.5rem" }}>
          {product.name}
        </Text>

        <Text fontSize="lg" color="tomato">
          ₫{product.discountPrice}
        </Text>
      </ReactLink>
    </GridItem>
  )
}
