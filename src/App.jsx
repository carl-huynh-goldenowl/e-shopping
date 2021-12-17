import React from "react"
import Footer from "layout/common/components/Footer"
import Header from "layout/common/components/Header"
import { Container, Box } from "@chakra-ui/layout"
import { Routes, Route } from "react-router-dom"
import ProductListManagement from "containers/ProductListManagement"
import { QueryClient, QueryClientProvider } from "react-query"
import AdminPage from "pages/AdminPage"
import AddNewProductForm from "forms/AddNewProductForm"
import ProductDetailPageSkeleton from "containers/ProductDetailPageSkeleton"
import Homepage from "pages/Homepage"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box bg="gray.100">
        <Header />
        <Container maxW="container.xl" py={6}>
          <Routes>
            <Route exact path="/admin" element={<AdminPage />}>
              <Route path="products/*" element={<AddNewProductForm />} />
              <Route path="products" element={<ProductListManagement />} />
            </Route>
            <Route
              exact
              path="/products/*"
              element={<ProductDetailPageSkeleton />}
            />
            <Route exact path="/" element={<Homepage />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </QueryClientProvider>
  )
}

export default App
