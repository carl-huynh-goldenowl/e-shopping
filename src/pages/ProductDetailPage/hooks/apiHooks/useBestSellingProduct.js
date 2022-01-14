import { getBestSellingProducts } from "apis/products"
import { useQuery } from "react-query"

const useBestSellingProducts = (category) => {
  const { isLoading, error, data } = useQuery("bestSellingProducts", () =>
    getBestSellingProducts(category)
  )

  return {
    loadingBestSellingProducts: isLoading,
    errorBestSellingProducts: error,
    bestSellingProducts: data?.data,
  }
}

export default useBestSellingProducts
