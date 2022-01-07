import React from "react"
import { Container } from "@chakra-ui/react"
import ShoppingCartHeader from "layout/shoppingCart/components/ShoppingCartHeader"
import Footer from "layout/common/components/Footer"

export default function ShoppingCartLayout({ children }) {
  return (
    <>
      <ShoppingCartHeader title="Thanh toán" displaySearchBar={false} />
      <Container maxW="container.xl" py={6}>
        {children}
      </Container>
      <Footer />
    </>
  )
}
