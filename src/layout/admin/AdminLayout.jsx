import React from "react"
import { Container } from "@chakra-ui/react"
import Header from "layout/admin/components/AdminHeader"
import Footer from "layout/common/components/Footer"

export default function AdminPage({ children }) {
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
