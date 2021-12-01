import React from "react"

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import { Container } from "@chakra-ui/layout"

function App() {
  return (
    <>
      <Header />
      <Container maxW="container.xl" h="100vh"></Container>
      <Footer />
    </>
  )
}

export default App
