const { useQuery } = require("react-query")

const useSearchRange = (queryKey, queryFunc) => {
  const { isLoading, error, data } = useQuery(queryKey, queryFunc)

  return {
    isLoadingSearchRange: isLoading,
    errorSearchRange: error,
    searchRange: data?.data,
  }
}

export default useSearchRange
