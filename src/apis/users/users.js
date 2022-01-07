import { deliveryInfo } from "./mockData"

export const getDeliveryInfo = async () => {
  //const url = `/products/${type}/best-selling-products`
  const response = {
    config: {},
    status: 200,
    statusText: "OK",
    data: deliveryInfo,
    headers: { "content-type": "application/json" },
  }
  return Promise.resolve(response)
}
