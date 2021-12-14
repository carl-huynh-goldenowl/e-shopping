import React from "react"
import { Heading, Link, Box } from "@chakra-ui/react"
import { Link as ReactLink } from "react-router-dom"

export default function ProductsManagementMenu() {
  return (
    <>
      <Heading as="h4" size="md">
        Quản lý sản phẩm
      </Heading>
      <Box mt="0.5rem">
        <Link
          as={ReactLink}
          to="/admin/products"
          _hover={{
            textDecoration: "none",
            color: "teal.400",
            fontWeight: "bold",
          }}
        >
          Tất cả sản phấm
        </Link>
      </Box>
      <Box mt="0.5rem">
        <Link
          as={ReactLink}
          to="/admin/products/add"
          _hover={{
            textDecoration: "none",
            color: "teal.400",
            fontWeight: "bold",
          }}
        >
          Thêm sản phẩm
        </Link>
      </Box>
    </>
  )
}
