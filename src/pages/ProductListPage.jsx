import { GridItem, SimpleGrid } from "@chakra-ui/react"
import { getProductList } from "apis/products"
import PaginatedItems from "components/PaginatedItems/Pagination/Pagination"
import ProductItem from "components/PaginatedItems/ProductItem"
import ProductListSkeleton from "components/Skeleton/ProductListSkeleton/ProductListSkeleton"
import React, { useCallback, useEffect, useState } from "react"
import { useQuery, useQueryClient } from "react-query"

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
  const queryClient = useQueryClient()
  const [page, setPage] = useState(0)
  const {
    isLoading,
    error,
    data: response,
    isFetching,
  } = useQuery(["productList", page], () => getProductList(page))

  const handleChangePage = useCallback(
    (data) => {
      setPage(data)
    },
    [setPage]
  )

  // Prefetch the next page!
  useEffect(() => {
    if (response?.hasMore) {
      queryClient.prefetchQuery(["productList", page + 1], () =>
        getProductList(page + 1)
      )
    }

    window.scrollTo(0, 0)
  }, [response, page, queryClient])

  if (isLoading || isFetching) {
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
      <ProductList currentItems={response.data?.productList} />
      <GridItem colSpan={12} justifyContent="center">
        <PaginatedItems
          itemsPerPage={response.data?.itemsPerPage}
          total={response.data.total}
          handleChangePage={handleChangePage}
          initPage={page}
        />
      </GridItem>
    </SimpleGrid>
  )
}
