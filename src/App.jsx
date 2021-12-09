import React from "react"

import Header from "./layout/Header"
import Footer from "./layout/Footer"
import { Container, Box } from "@chakra-ui/layout"
import { Routes, Route } from "react-router-dom"
import ProductDetailPage from "./pages/ProductDetailPage"
import Homepage from "./pages/Homepage"

import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box bg="gray.100">
        <Header />
        <Container maxW="container.xl" py={6}>
          <Routes>
            <Route exact path="/products/*" element={<ProductDetailPage />} />
            <Route exact path="/" element={<Homepage />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </QueryClientProvider>
  )
}

export default App
