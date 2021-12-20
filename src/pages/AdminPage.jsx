import React from "react"
import { Container, GridItem, SimpleGrid } from "@chakra-ui/react"
import ProductsManagementMenu from "containers/ProductsManagementMenu"
import { Outlet } from "react-router-dom"
// import AddNewProduct from "../containers/AddNewProduct"
import Header from "layout/admin/components/AdminHeader"
import Footer from "layout/common/components/Footer"

export default function AdminPage() {
  return (
    <>
      <Header />
      <Container maxW="container.xl" py={6}>
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
      </Container>
      <Footer />
    </>
  )
}
