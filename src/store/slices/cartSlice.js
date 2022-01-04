import { createSlice } from "@reduxjs/toolkit"
import _ from "lodash"

const initialState = {
  cart: [],
  tmpProduct: null,
  isDeleted: false,
  deletedProductPos: -1,
  checkedProductList: [],
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
        state.cart = _.concat(state.cart, {
          ...action.payload.product,
          qty: action.payload.qty,
        })
      }
    },
    removeProduct: (state, action) => {
      state.deletedProductPos = _.findIndex(state.cart, {
        id: action.payload.id,
      })
      _.remove(state.cart, (item) => item.id === action.payload.id)
      state.isDeleted = true
    },
    updateQuantity: (state, action) => {
      const index = _.findIndex(state.cart, { id: action.payload.productId })
      state.cart[index].qty = action.payload.qty
    },
    deleteCart: () => {
      return initialState
    },
    addTmpProduct: (state, action) => {
      state.tmpProduct = action.payload
    },
    deleteTmpProduct: (state) => {
      state.tmpProduct = null
    },
    addToCheckedProductList: (state, action) => {
      const index = state.checkedProductList.indexOf(action.payload)

      if (index < 0) {
        state.checkedProductList = _.concat(
          state.checkedProductList,
          action.payload
        )
      }
    },
    deleteCheckedProduct: (state, action) => {
      action.payload.forEach((productId) => {
        _.remove(state.cart, (item) => item.id === productId)
      })

      action.payload.forEach((productId) => {
        _.remove(state.checkedProductList, (id) => id === productId)
      })
    },
    updateCheckedProductList: (state, action) => {
      state.checkedProductList = action.payload
    },
  },
})

export const {
  addProduct,
  removeProduct,
  updateQuantity,
  deleteCart,
  addTmpProduct,
  deleteTmpProduct,
  addToCheckedProductList,
  deleteCheckedProduct,
  updateCheckedProductList,
} = cartSlice.actions

export default cartSlice.reducer
