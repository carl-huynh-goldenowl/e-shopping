import React, { useState } from "react"
import { GridItem, SimpleGrid } from "@chakra-ui/layout"

import PaginatedItems from "../components/PaginatedItems"
import ProductItem from "../components/PaginatedItems/ProductItem"

let productList = Array(108).fill({
  id: "1",
  name: `Laptop Asus VivoBook F512J - I3 1005G1/ RAM 4GB/SSD 128 GB/15.6
              inch/Cảm ứng/Win10/Màu đen- Nhập khẩu chính hãng -BH 12T`,
  img: "https://cf.shopee.vn/file/d1fae5bae7153be96056fa2b7e59d650",
  discountPrice: "12.290.000",
})

function ProductList({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
    </>
  )
}

export default function Homepage() {
  const [currentItems, setCurrentItems] = useState(null)

  return (
    <>
      <SimpleGrid columns={12} spacing={3}>
        <ProductList currentItems={currentItems} />
        <GridItem colSpan={12} justifyContent="center">
          <PaginatedItems
            itemsPerPage={36}
            productList={productList}
            setCurrentItems={setCurrentItems}
          />
        </GridItem>
      </SimpleGrid>
    </>
  )
}
