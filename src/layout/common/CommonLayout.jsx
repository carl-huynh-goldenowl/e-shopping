import React from "react"
import Header from "layout/common/components/Header"
import { Container } from "@chakra-ui/react"
import Footer from "layout/common/components/Footer"

export default function Homepage({ children }) {
  return (
    <>
      <Header />
      <Container maxW="container.xl" py={6}>
        {children}
      </Container>
      <Footer />
    </>
  )
}
