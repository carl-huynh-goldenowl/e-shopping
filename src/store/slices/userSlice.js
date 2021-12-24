import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userInfo: {
    username: "",
    email: "",
  },
  token: "",
  isAuth: false,
  isAdmin: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.userInfo = action.payload.userInfo
      state.token = action.payload.token
      state.isAuth = true
    },
    signInAsAdmin: (state, action) => {
      state.userInfo = action.payload.userInfo
      state.token = action.payload.token
      state.isAuth = true
      state.isAdmin = true
    },
    signOut: () => {
      return initialState
    },
  },
})

export const { signIn, signInAsAdmin, signOut } = userSlice.actions

export default userSlice.reducer
