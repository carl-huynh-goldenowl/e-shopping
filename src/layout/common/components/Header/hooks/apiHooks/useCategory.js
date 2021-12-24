const { useQuery } = require("react-query")

const useCategory = (url, queryFunc) => {
  const { isLoading, error, data } = useQuery(url, queryFunc)

  return { isLoading, error, data }
}

export default useCategory
