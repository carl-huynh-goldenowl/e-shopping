const { useQuery } = require("react-query")

const useCheckedProduct = (queryKey, queryFunc) => {
  const { isLoading, error, data } = useQuery(queryKey, queryFunc)

  return {
    isLoadingCheckedProductList: isLoading,
    checkedProductListError: error,
    checkedProductDetailList: data?.data,
  }
}

export default useCheckedProduct
