import React from "react"
import { GridItem, SimpleGrid } from "@chakra-ui/react"
import ProductsManagementMenu from "containers/ProductsManagementMenu"
import { Outlet } from "react-router-dom"
import AdminLayout from "layout/admin/AdminLayout"

export default function AdminPage() {
  console.log("render admin page")
  return (
    <AdminLayout>
      <SimpleGrid columns={10} spacing={6} alignItems={"flex-start "}>
        <GridItem
          colSpan={[10, 10, 10, 2]}
          bg="white"
          rounded={"md"}
          shadow={"xl"}
          p={3}
          position={[null, null, null, "sticky"]}
          top={6}
        >
          <ProductsManagementMenu />
        </GridItem>
        <GridItem colSpan={[10, 10, 10, 8]}>
          <Outlet />
        </GridItem>
      </SimpleGrid>
    </AdminLayout>
  )
}
