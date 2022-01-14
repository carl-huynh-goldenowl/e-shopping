import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { Provider as ReduxProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner"
import { store } from "store/store"
import { persistStore } from "redux-persist"
import theme from "./theme"
import "./i18n"

let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Suspense fallback="...is loading">
              <App />
            </Suspense>
          </BrowserRouter>
        </ChakraProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
