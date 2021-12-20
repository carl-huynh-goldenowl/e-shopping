import React, { useState } from "react"
import { Heading, Link, Menu, MenuItem, Box } from "@chakra-ui/react"
import CustomActiveLink from "components/Link/CustomActiveLink"

export default function ProductsManagementMenu() {
  const [isSelected, setIsSelected] = useState([true, false, false, false])
  return (
    <>
      <Heading as="h4" size="md">
        Quản lý sản phẩm
      </Heading>
      <Menu>
        <CustomActiveLink to="/admin/products">
          <MenuItem
            _hover={{
              textDecoration: "none",
              color: "teal.400",
              fontWeight: "bold",
            }}
          >
            Tất cả sản phẩm
          </MenuItem>
        </CustomActiveLink>

        <CustomActiveLink to="/admin/add-product">
          <MenuItem
            _hover={{
              textDecoration: "none",
              color: "teal.400",
              fontWeight: "bold",
            }}
          >
            Thêm sản phẩm
          </MenuItem>
        </CustomActiveLink>
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
