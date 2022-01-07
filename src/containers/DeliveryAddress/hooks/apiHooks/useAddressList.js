const { useQuery } = require("react-query")

const useAddressList = (url, queryFunc) => {
  const { isLoading, error, data } = useQuery(url, queryFunc)

  return { isLoading, error, addressList: data?.data }
}

export default useAddressList
