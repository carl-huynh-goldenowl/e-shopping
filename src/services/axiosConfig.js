import axios from "axios"

const instance = axios.create({
  baseURL: "https://61b213afc8d4640017aaf1b1.mockapi.io/",
  timeout: 1000,
})

export default instance
