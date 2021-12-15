import React from "react"
import { GridItem, SimpleGrid } from "@chakra-ui/react"
import ProductsManagementMenu from "../containers/ProductsManagementMenu"
import { Outlet } from "react-router-dom"
// import AddNewProduct from "../containers/AddNewProduct"

export default function AdminPage() {
  return (
    <SimpleGrid columns={10} spacing={6} alignItems={"flex-start "}>
      <GridItem
        colSpan={[12, 12, 2]}
        bg="white"
        rounded={"md"}
        shadow={"xl"}
        p={3}
        position={"sticky"}
        top={6}
      >
        <ProductsManagementMenu />
      </GridItem>
      <GridItem colSpan={[12, 12, 8]}>
        <Outlet />
      </GridItem>
    </SimpleGrid>
  )
}
