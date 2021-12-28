import React from "react"
import ShoppingCartLayout from "layout/shoppingCart/ShoppingCartLayout"
import ShoppingCart from "containers/ShoppingCart"

export default function ShoppingCartPage() {
  return (
    <ShoppingCartLayout>
      <ShoppingCart />
    </ShoppingCartLayout>
  )
}
