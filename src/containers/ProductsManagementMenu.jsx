import React, { useState } from "react"
import { Heading, Link, Menu, MenuItem, Box } from "@chakra-ui/react"
import CustomActiveLink from "components/Link/CustomActiveLink"
import { useTranslation } from "react-i18next"

export default function ProductsManagementMenu() {
  const [isSelected, setIsSelected] = useState([true, false, false, false])
  const { t } = useTranslation()

  return (
    <>
      <Heading as="h4" size="md">
        {t("productsManagement.productsManagement")}
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
            {t("productsManagement.allProducts")}
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
            {t("productsManagement.addProduct")}
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
              {t("productsManagement.productName")}
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
              {t("productsManagement.trademark")}
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
              {t("productsManagement.basicInfo")}
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
              {t("productsManagement.otherInfo")}
            </MenuItem>
          </Link>
        </Menu>
      </Box>
    </>
  )
}
