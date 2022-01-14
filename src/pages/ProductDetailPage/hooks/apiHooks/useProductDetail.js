import { getProductDetail } from "apis/products"
import { useQuery } from "react-query"

const useProductDetail = (productId) => {
  const { isLoading, error, data } = useQuery("productDetail", () =>
    getProductDetail(productId)
  )

  return {
    loadingProductDetail: isLoading,
    errorProductDeatil: error,
    productDetail: data,
  }
}

export default useProductDetail
