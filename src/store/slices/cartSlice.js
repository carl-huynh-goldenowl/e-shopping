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
    updateDeletedState: (state) => {
      state.isDeleted = false
      state.deletedProductPos = -1
    },
    addToCheckedProductList: (state, action) => {
      const index = _.findIndex(state.checkedProductList, {
        id: action.payload.id,
      })

      if (index > -1) {
        state.checkedProductList[index].isChecked = action.payload.isChecked
      } else {
        state.checkedProductList = _.concat(
          state.checkedProductList,
          action.payload
        )
      }
    },
    deleteCheckedProduct: (state, action) => {
      action.payload.forEach((product) => {
        if (product.isChecked) {
          _.remove(state.cart, (item) => item.id === product.id)
        }
      })
      action.payload.forEach((product) => {
        if (product.isChecked) {
          _.remove(state.checkedProductList, (item) => item.id === product.id)
        }
      })
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
  updateDeletedState,
  addToCheckedProductList,
  deleteCheckedProduct,
} = cartSlice.actions

export default cartSlice.reducer
