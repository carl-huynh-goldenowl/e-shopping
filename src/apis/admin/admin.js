import { searchRange } from "./mockData"

export const getSearchRange = async () => {
  //const url = `/checked-product-list`

  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: searchRange,
    headers: { "content-type": "application/json" },
  }
  return Promise.resolve(response)
}
