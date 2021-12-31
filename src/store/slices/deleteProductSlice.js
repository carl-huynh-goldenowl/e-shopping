import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOpen: false,
  productId: "0",
}

export const deleteProductSlice = createSlice({
  name: "deleteProduct",
  initialState,
  reducers: {
    setIsOpenDeleteProductDialog: (state, action) => {
      state.isOpen = action.payload.isOpen
      state.productId = action.payload.productId
    },
  },
})

export const { setIsOpenDeleteProductDialog } = deleteProductSlice.actions

export default deleteProductSlice.reducer
