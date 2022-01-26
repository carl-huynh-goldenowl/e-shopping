import { getCategory } from "apis/products"

const { useQuery } = require("react-query")

const useCategory = () => {
  const { isLoading, error, data } = useQuery("category", async () => {
    return await getCategory()
  })

  return { isLoading, error, category: data?.data }
}

export default useCategory
