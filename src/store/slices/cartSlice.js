import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.userInfo = action.payload.userInfo
      state.token = action.payload.token
      state.isAuth = true
    },
    removeProduct: () => {
      return initialState
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    clearCart: () => {
      return initialState
    },
  },
})

export const { addProduct, removeProduct, increment, decrement, signOut } =
  cartSlice.actions

export default cartSlice.reducer
