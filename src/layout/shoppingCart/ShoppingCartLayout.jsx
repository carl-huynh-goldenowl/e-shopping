import React from "react"
import { Container } from "@chakra-ui/react"
import Footer from "layout/common/components/Footer"
import ShoppingCartHeader from "./components/ShoppingCartHeader"

export default function ShoppingCartLayout({ children }) {
  return (
    <>
      <ShoppingCartHeader />
      <Container maxW="container.xl" py={6}>
        {children}
      </Container>
      <Footer />
    </>
  )
}
