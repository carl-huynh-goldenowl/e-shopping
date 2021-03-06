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
      state.userInfo.email = action.payload.userInfo.email
      state.token = action.payload.token
      state.isAuth = true
      state.isAdmin = true
    },
    signInAsAdmin: (state, action) => {
      state.userInfo = action.payload.userInfo
      state.token = action.payload.token
      state.isAuth = true
      state.isAdmin = true
    },
    signOut: () => {
      //state.isAuth = false
      return initialState
    },
    forgetPassword: () => {},
  },
})

export const { signIn, signInAsAdmin, signOut, forgetPassword } =
  userSlice.actions

export default userSlice.reducer
