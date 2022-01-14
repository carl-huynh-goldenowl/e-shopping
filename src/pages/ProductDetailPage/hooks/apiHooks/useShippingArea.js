import { getShippingArea } from "apis/admin"
import { useQuery } from "react-query"

const useShippingArea = () => {
  const { isLoading, error, data } = useQuery("shippingArea", () =>
    getShippingArea()
  )

  return {
    loadingShippingArea: isLoading,
    errorShippingArea: error,
    shippingArea: data?.data,
  }
}

export default useShippingArea
