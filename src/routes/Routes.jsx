import { AuthContext } from "context/authContext"
import AddNewProductPage from "pages/AddNewProductPage"
import React, { useContext } from "react"
import { Navigate, Route, useLocation } from "react-router-dom"

import {
  Homepage,
  SignInPage,
  ProductListManagement,
  ProductDetailPage,
  SignUpPage,
  ProductListPage,
} from "pages"
import AdminPage from "pages/AdminPage"

import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner"

const DefaultComponent = () => {
  return <Navigate to={Routes.home.path} />
}

export const Routes = {
  signIn: {
    path: "/sign-in",
    element: SignInPage,
  },
  signUp: {
    path: "/sign-up",
    element: SignUpPage,
  },
  admin: {
    path: "/admin",
    element: AdminPage,
    isAuth: true,
    isAdmin: true,
    index: ProductListManagement,
    routes: {
      productList: {
        path: "products",
        element: ProductListManagement,
        isAuth: true,
      },
      addProduct: {
        path: "add-product",
        element: AddNewProductPage,
        isAuth: true,
      },
      default: {
        path: "*",
        element: DefaultComponent,
      },
    },
  },
  home: {
    path: "/",
    element: Homepage,
    index: ProductListPage,
    routes: {
      products: {
        path: "products",
        element: ProductListPage,
      },
      productDetail: {
        path: "products/*",
        element: ProductDetailPage,
      },
      default: {
        path: "*",
        element: DefaultComponent,
      },
    },
  },
  default: {
    path: "*",
    element: DefaultComponent,
  },
}

export function AppLoading(props) {
  return <Route path={props.path} element={<LoadingSpinner />} />
}

export function RouteComponentWrapper(route, key) {
  const { authState } = useContext(AuthContext)
  let location = useLocation()

  if (!authState.initialized)
    return (
      <Route key={key} path={location.pathname} element={<LoadingSpinner />} />
    )

  if (!authState.isAuth && route.isAuth)
    return (
      <Route
        key={key}
        path={route.path}
        element={
          <Navigate to={Routes.signIn.path} state={{ from: location }} />
        }
      />
    )

  if (!authState.isAdmin && route.isAdmin) {
    if (authState.isAuth) {
      return (
        <Route
          key={key}
          path={route.path}
          element={
            <Navigate to={Routes.home.path} state={{ from: location }} />
          }
        />
      )
    } else {
      return (
        <Route
          key={key}
          path={route.path}
          element={
            <Navigate to={Routes.signIn.path} state={{ from: location }} />
          }
        />
      )
    }
  }
  return (
    <Route path={route.path} element={<route.element />} key={key}>
      {route.index ? <Route index element={<route.index />} /> : undefined}
      {route.routes ? RenderRoutes(route.routes) : undefined}
    </Route>
  )
}

export function RenderRoutes(routes) {
  return Object.values(routes).map((route, index) => {
    return RouteComponentWrapper(route, index)
  })
}
