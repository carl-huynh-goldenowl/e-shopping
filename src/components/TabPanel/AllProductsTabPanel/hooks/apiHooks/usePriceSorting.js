import { getAscPriceProductList, getDescPriceProductList } from "apis/admin"
import { useQuery, useQueryClient } from "react-query"

const usePriceSorting = (isDescPrice, hasMore, page = 0) => {
  const queryClient = useQueryClient()

  const { isLoading, error, data } = useQuery(
    ["priceSorting", page],
    async () => {
      if (isDescPrice) {
        return await getDescPriceProductList(page)
      } else {
        return await getAscPriceProductList(page)
      }
    }
  )

  if (hasMore && isDescPrice) {
    queryClient.prefetchQuery(["priceSorting", page + 1], () =>
      getDescPriceProductList(page + 1)
    )
  } else {
    queryClient.prefetchQuery(["priceSorting", page + 1], () =>
      getAscPriceProductList(page + 1)
    )
  }

  return {
    loadingPriceSorting: isLoading,
    priceSortingError: error,
    priceSortingList: data?.data,
  }
}

export default usePriceSorting
