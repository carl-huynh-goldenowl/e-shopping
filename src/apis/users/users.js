import { adminAccount, userAccount } from "."
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

export const signIn = async (email, password) => {
  if (email === "admin@gmail.com" && password === "123456") {
    const response = {
      config: {},
      status: 200,
      statusText: "OK",
      data: adminAccount,
      headers: { "content-type": "application/json" },
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response)
      }, 2000)
    })
  } else if (email === "user@gmail.com" && password === "123456") {
    const response = {
      config: {},
      status: 200,
      statusText: "OK",
      data: userAccount,
      headers: { "content-type": "application/json" },
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response)
      }, 2000)
    })
  } else {
    const response = {
      config: {},
      status: 401,
      statusText: "Unauthorized",
      data: null,
      headers: { "content-type": "application/json" },
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response)
      }, 2000)
    })
  }
}
