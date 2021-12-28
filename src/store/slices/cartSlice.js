import { createSlice } from "@reduxjs/toolkit"
import _ from "lodash"

const initialState = {
  cart: [
    // {
    //   id: 1,
    //   name: "a",
    //   qty: 0,
    // },
    // {
    //   id: 2,
    //   name: "b",
    //   qty: 0,
    // },
  ],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const index = _.findIndex(state.cart, { id: action.payload.product.id })

      if (index > -1) {
        state.cart[index].qty += action.payload.qty
      } else {
        state.cart = _.concat(
          state.cart,
          _.assign(action.payload.product, { qty: action.payload.qty })
        )
      }
    },
    removeProduct: (state, action) => {
      _.remove(state.cart, (item) => item.id === action.payload.id)
    },
    updateQuantity: (state, action) => {
      const index = _.findIndex(state.cart, { id: action.payload.productId })
      state.cart[index].qty = action.payload.qty
    },
    deleteCart: () => {
      return initialState
    },
  },
})

export const { addProduct, removeProduct, updateQuantity, deleteCart } =
  cartSlice.actions

export default cartSlice.reducer
