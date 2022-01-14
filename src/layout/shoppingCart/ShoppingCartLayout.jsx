import React from "react"
import { Container } from "@chakra-ui/react"
import Footer from "layout/common/components/Footer"
import ShoppingCartHeader from "./components/ShoppingCartHeader"
import { useTranslation } from "react-i18next"

export default function ShoppingCartLayout({ children }) {
  const { t } = useTranslation()

  return (
    <>
      <ShoppingCartHeader title={t("cart.cart")} displaySearchBar={true} />
      <Container maxW="container.xl" py={6}>
        {children}
      </Container>
      <Footer />
    </>
  )
}
