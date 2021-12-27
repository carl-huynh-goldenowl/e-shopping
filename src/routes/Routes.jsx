import AddNewProductPage from "pages/AddNewProductPage"
import React from "react"
import { Navigate, Route, useLocation } from "react-router-dom"

import {
  Homepage,
  SignInPage,
  ProductListManagement,
  ProductDetailPage,
  SignUpPage,
  ProductListPage,
  ForgetPasswordPage,
} from "pages"
import AdminPage from "pages/AdminPage"
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner"
import { useSelector } from "react-redux"

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
  forgetPassword: {
    path: "/forget-password",
    element: ForgetPasswordPage,
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
      editProduct: {
        path: "edit-product/:id",
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
        path: "products/:id",
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
  const user = useSelector((state) => state.user)
  let location = useLocation()

  // if (!user.initialized)
  //   return (
  //     <Route key={key} path={location.pathname} element={<LoadingSpinner />} />
  //   )

  if (!user.isAuth && route.isAuth)
    return (
      <Route
        key={key}
        path={route.path}
        element={
          <Navigate to={Routes.signIn.path} state={{ from: location }} />
        }
      />
    )

  if (!user.isAdmin && route.isAdmin) {
    if (user.isAuth) {
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
