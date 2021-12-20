import React from "react"
import { Outlet } from "react-router-dom"
import Header from "layout/common/components/Header"
import { Container } from "@chakra-ui/react"
import Footer from "layout/common/components/Footer"

export default function Homepage() {
  return (
    <>
      <Header />
      <Container maxW="container.xl" py={6}>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}
