const { useQuery } = require("react-query")

const useProductStatus = (queryKey, queryFunc) => {
  const { isLoading, error, data } = useQuery(queryKey, queryFunc)

  return {
    isLoadingProductStatus: isLoading,
    errorProductStatus: error,
    productStatus: data?.data,
  }
}

export default useProductStatus
