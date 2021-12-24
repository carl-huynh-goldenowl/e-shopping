//import instance from "../axios"
//import { DEFAULT_ITEM_PER_PAGE } from "./constant"
import { category, productDetail, productList } from "./mockData"

export const getCategory = async () => {
  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: category,
    headers: { "content-type": "application/json" },
  }
  return Promise.resolve(response)
}

export const getProductList = async (page = 0) => {
  //  Todo
  // const url = qs.stringifyUrl({
  //   url: '/',
  // });

  // return instance.get(url, {
  //   keyword,
  //   to: dateUtils.getFullTimeString(to),
  //   from: dateUtils.getFullTimeString(from),
  // });

  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: productList[page],
    headers: { "content-type": "application/json" },
  }
  return Promise.resolve(response)
}

export const getProductDetail = async (productId) => {
  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: productDetail[productId],
    headers: { "content-type": "application/json" },
  }
  return Promise.resolve(response)
}

export const getSimilarProducts = async () => {
  //const url = `/products/${productId}/similar-products`
  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: productDetail,
    headers: { "content-type": "application/json" },
  }
  return Promise.resolve(response)
}

export const getRecommendedProducts = async () => {
  //const url = `/products/${productId}/recommended-products`
  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: productDetail,
    headers: { "content-type": "application/json" },
  }
  return Promise.resolve(response)
}

export const getBestSellingProducts = async () => {
  //const url = `/products/${type}/best-selling-products`
  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: productDetail,
    headers: { "content-type": "application/json" },
  }
  return Promise.resolve(response)
}
