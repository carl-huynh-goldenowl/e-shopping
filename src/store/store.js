import { configureStore } from "@reduxjs/toolkit"
import { cartReducer, userReducer } from "store/slices"
//import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import { persistReducer, createMigrate } from "redux-persist"

const migrations = {
  0: (state) => {
    return state
  },
}

const persistConfig = {
  key: "user",
  version: 0,
  storage,
  migrate: createMigrate(migrations, { debug: false }),
}

// const rootReducer = combineReducers({
//   user: userReducer,
//   cart: cartReducer,
// })

//const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userReducer),
    cart: cartReducer,
  },
})
