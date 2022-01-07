const { useQuery } = require("react-query")

const useDeliveryInfo = (url, queryFunc) => {
  const { isLoading, error, data } = useQuery(url, queryFunc)

  return { isLoading, error, deliveryInfo: data?.data }
}

export default useDeliveryInfo
