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
