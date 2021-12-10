import instance from "./axiosConfig"

const catalogue = [
  {
    id: "",
    type: "",
  },
]

// For product of product list, similar products, recommended products and best-selling products

const product = [
  {
    id: "",
    name: "",
    pictureUrl: "",
    discountPrice: "",
    type: "",
  },
]

const productDetail = {
  id: "",
  name: "",
  pictureUrl: "",
  detailPicsUrl: [],
  price: "",
  discountPrice: "",
  rating: "",
  review: "",
  sold: "",
  detail: {
    trademark: "",
    warrantyPeriod: "",
    warrantyType: "",
    laptopType: "",
    status: "",
    quantity: "",
    sendFrom: "",
  },
  description: "",
  type: "",
}

export const getCatalogue = async () => {
  // const res = await instance.get(
  //   "catalogue"
  // )

  // return res.data
  return catalogue
}

export const getProductList = async () => {
  const res = await instance.get("products")
  return res.data
  //return product
}

export const getProductDetail = async () => {
  // const res = await instance.get(
  //   `products/${id}`
  // )
  // return res.data
  return productDetail
}

export const getSimilarProducts = async () => {
  // const res = await instance.get(
  //   `products/${id}/similar-products`
  // )
  // return res.data
  return product
}

export const getRecommendedProducts = async () => {
  // const res = await instance.get(
  //   `products/${id}/recommended-products`
  // )
  // return res.data
  return product
}

export const getBestSellingProducts = async () => {
  // const res = await instance.get(
  //   `products/${type}/best-selling-products`
  // )
  // return res.data
  return product
}
