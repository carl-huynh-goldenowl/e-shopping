import React, { useContext, useEffect } from "react"
import { Routes as RoutesDom } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { AuthContext } from "context/authContext"
import { RenderRoutes } from "routes/Routes"
import { Routes } from "routes/Routes"

const queryClient = new QueryClient()

function App() {
  const { authDispatch } = useContext(AuthContext)

  useEffect(() => {
    setTimeout(() => {
      authDispatch({ type: "initialize" })
    }, 2000)
    //authDispatch({ type: "initialize" })
  }, [authDispatch])

  return (
    <QueryClientProvider client={queryClient}>
      <RoutesDom>{RenderRoutes(Routes)}</RoutesDom>
    </QueryClientProvider>
  )
}

export default App
