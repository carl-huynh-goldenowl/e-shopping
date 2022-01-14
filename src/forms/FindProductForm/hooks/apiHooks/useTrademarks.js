const { useQuery } = require("react-query")

const useTrademarks = (queryKey, queryFunc) => {
  const { isLoading, error, data } = useQuery(queryKey, queryFunc)

  return {
    isLoadingTrademarks: isLoading,
    errorTrademarks: error,
    trademarks: data?.data,
  }
}

export default useTrademarks
