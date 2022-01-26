import { productList } from "apis/products/mockData"
import { searchRange, shippingArea } from "./mockData"

export const getSearchRange = async () => {
  //const url = `/search-ranget`

  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: searchRange,
    headers: { "content-type": "application/json" },
  }
  return Promise.resolve(response)
}

export const getShippingArea = async () => {
  //const url = `/shipping-area`

  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: shippingArea,
    headers: { "content-type": "application/json" },
  }
  return Promise.resolve(response)
}

export const getDescPriceProductList = async (page) => {
  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: productList[page], // missing: stock, sold
    headers: { "content-type": "application/json" },
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response)
    }, 0)
  })
}

export const getAscPriceProductList = async (page) => {
  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: productList[page],
    headers: { "content-type": "application/json" },
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response)
    }, 2000)
  })
}
