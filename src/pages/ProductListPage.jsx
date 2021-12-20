import { GridItem, SimpleGrid, useQuery } from "@chakra-ui/react"
import { getProductList } from "apis/products"
import PaginatedItems from "components/PaginatedItems/Pagination/Pagination"
import ProductItem from "components/PaginatedItems/ProductItem"
import ProductListSkeleton from "components/Skeleton/ProductListSkeleton/ProductListSkeleton"
import React from "react"

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

export default function ProductListPage() {
  const { isLoading, error, data } = useQuery("productList", getProductList)

  const handleChangePage = () => {}

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

  return (
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
  )
}
