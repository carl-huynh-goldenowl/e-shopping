import { getSimilarProducts } from "apis/products"
import { useQuery } from "react-query"

const useSimilarProducts = (productId) => {
  const { isLoading, error, data } = useQuery("similarProduct", () =>
    getSimilarProducts(productId)
  )

  return {
    loadingSimilarProducts: isLoading,
    errorSimilarProducts: error,
    similarProducts: data?.data,
  }
}

export default useSimilarProducts
