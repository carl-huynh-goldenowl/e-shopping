import React from "react"
import { GridItem, SimpleGrid } from "@chakra-ui/layout"
import { useQuery } from "react-query"
import PaginatedItems from "../components/PaginatedItems"
import ProductItem from "../components/PaginatedItems/ProductItem"
import ProductListSkeleton from "../components/Skeleton/ProductListSkeleton"
import { getProductList } from "../services/api"

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
  const { isLoading, error, data } = useQuery("productList", getProductList)

  if (isLoading) {
    return (
      <ProductListSkeleton
        productTotal={36}
        colTotal={12}
        mergedColNum={2}
        pictureHeight={9}
      />
    )
  }

  if (error) return "An error has occurred: " + error.message

  const handleChangePage = () => {}

  return (
    <>
      <SimpleGrid columns={12} spacing={3}>
        <ProductList currentItems={data} />
        <GridItem colSpan={12} justifyContent="center">
          <PaginatedItems
            itemsPerPage={50}
            total={200}
            handleChangePage={() => () => handleChangePage}
          />
        </GridItem>
      </SimpleGrid>
    </>
  )
}
