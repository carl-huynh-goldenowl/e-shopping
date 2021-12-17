import React, { useState } from "react"
import { Heading, Link, Menu, MenuItem, Box } from "@chakra-ui/react"
import { Link as ReactLink } from "react-router-dom"

export default function ProductsManagementMenu() {
  const [isSelected, setIsSelected] = useState([true, false, false, false])
  return (
    <>
      <Heading as="h4" size="md">
        Quản lý sản phẩm
      </Heading>
      <Menu>
        <Link
          as={ReactLink}
          w={"100%"}
          to="/admin/products"
          _hover={{
            textDecoration: "none",
            color: "teal.400",
            fontWeight: "bold",
          }}
        >
          <MenuItem>Tất cả sản phẩm</MenuItem>
        </Link>
        <Link
          as={ReactLink}
          to="/admin/products/add"
          _hover={{
            textDecoration: "none",
            color: "teal.400",
            fontWeight: "bold",
          }}
        >
          <MenuItem>Thêm sản phẩm</MenuItem>
        </Link>
      </Menu>
      <Box ml={6} borderLeft="1px solid gray">
        <Menu>
          <Link
            href="#product-name"
            _hover={{
              textDecoration: "none",
              color: "teal.400",
              fontWeight: "bold",
            }}
          >
            <MenuItem
              borderLeft={isSelected[0] ? "2px solid teal" : "0"}
              onClick={() => setIsSelected([true, false, false, false])}
            >
              Tên sản phẩm
            </MenuItem>
          </Link>
          <Link
            href="#category"
            _hover={{
              textDecoration: "none",
              color: "teal.400",
              fontWeight: "bold",
            }}
          >
            <MenuItem
              borderLeft={isSelected[1] ? "2px solid teal" : "0"}
              onClick={() => setIsSelected([false, true, false, false])}
            >
              Danh mục
            </MenuItem>
          </Link>
          <Link
            href="#basic-info"
            _hover={{
              textDecoration: "none",
              color: "teal.400",
              fontWeight: "bold",
            }}
          >
            <MenuItem
              borderLeft={isSelected[2] ? "2px solid teal" : "0"}
              onClick={() => setIsSelected([false, false, true, false])}
            >
              Thông tin cơ bản
            </MenuItem>
          </Link>

          <Link
            href="#other-info"
            _hover={{
              textDecoration: "none",
              color: "teal.400",
              fontWeight: "bold",
            }}
          >
            <MenuItem
              borderLeft={isSelected[3] ? "2px solid teal" : "0"}
              onClick={() => setIsSelected([false, false, false, true])}
            >
              Thông tin khác{" "}
            </MenuItem>
          </Link>
        </Menu>
      </Box>
    </>
  )
}
