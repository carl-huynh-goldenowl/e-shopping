import React from "react"
import { Box, GridItem, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Link as ReactLink } from "react-router-dom"
import { Link } from "@chakra-ui/layout"

export default function ProductItem({ product }) {
  return (
    <GridItem
      colSpan={2}
      bg="white"
      rounded="md"
      shadow="xl"
      p="0.5rem"
      _hover={{
        border: "0.2rem solid",
        borderColor: "teal.300",
        textDecoration: "none",
      }}
    >
      <Link
        as={ReactLink}
        to={`/products/${product.id}`}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Box>
          <Image
            objectFit="cover"
            width="100%"
            src={product.pictureUrl}
            alt={product.name}
          />
        </Box>

        <Text fontSize="sm" noOfLines={2}>
          {product.name}
        </Text>

        <Text fontSize="lg" color="tomato">
          ₫{product.discountPrice}
        </Text>
      </Link>
    </GridItem>
  )
}
