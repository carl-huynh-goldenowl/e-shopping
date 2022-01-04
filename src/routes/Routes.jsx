import AddNewProductPage from "pages/AddNewProductPage"
import React from "react"
import { Navigate, Route } from "react-router-dom"

import {
  Homepage,
  SignInPage,
  ProductListManagement,
  ProductDetailPage,
  SignUpPage,
  ProductListPage,
  ForgetPasswordPage,
  ShoppingCartPage,
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
        //isAuth: true,
      },
      addProduct: {
        path: "add-product",
        element: AddNewProductPage,
        //isAuth: true,
        //isAdmin: true,
      },
      editProduct: {
        path: "edit-product/:id",
        element: AddNewProductPage,
        //isAuth: true,
      },
      default: {
        path: "*",
        element: DefaultComponent,
      },
    },
  },
  shoppingCart: {
    path: "/cart",
    isAuth: true,
    element: ShoppingCartPage,
    index: ShoppingCartPage,
    routes: {
      default: {
        path: "*",
        element: ShoppingCartPage,
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

export function RouteComponentWrapper(route, key, user, location) {
  // if (!user.initialized)
  //   return (
  //     <Route key={key} path={location.pathname} element={<LoadingSpinner />} />
  //   )

  if (!user?.isAuth && route.isAuth)
    return (
      <Route
        key={key}
        path={route.path}
        element={
          <Navigate to={Routes.signIn.path} state={{ from: location }} />
        }
      />
    )

  if (!user?.isAdmin && route.isAdmin) {
    if (user?.isAuth) {
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

export function RenderRoutes(routes, user, location) {
  return Object.values(routes).map((route, index) => {
    return RouteComponentWrapper(route, index, user, location)
  })
}
