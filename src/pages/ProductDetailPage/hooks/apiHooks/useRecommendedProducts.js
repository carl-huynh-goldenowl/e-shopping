import { getRecommendedProducts } from "apis/products"
import { useQuery } from "react-query"

const useRecommendedProducts = (productId) => {
  const { isLoading, error, data } = useQuery("recommendedProduct", () =>
    getRecommendedProducts(productId)
  )

  return {
    loadingRecommendedProducts: isLoading,
    errorRecommendedProducts: error,
    recommendedProducts: data?.data,
  }
}

export default useRecommendedProducts
