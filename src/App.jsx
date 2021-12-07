import React from "react"

import Header from "./layout/Header"
import Footer from "./layout/Footer"
import { Container, Box } from "@chakra-ui/layout"
import { Routes, Route } from "react-router-dom"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {
  return (
    <Box bg="gray.100">
      <Header />
      <Container maxW="container.xl" py={6}>
        <Routes>
          <Route exact path="/products/*" element={<ProductDetailPage />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  )
}

export default App
