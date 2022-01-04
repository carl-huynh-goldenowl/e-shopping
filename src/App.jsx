import React from "react"
import { Routes as RoutesDom, useLocation } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { RenderRoutes } from "routes/Routes"
import { Routes } from "routes/Routes"
import { useSelector } from "react-redux"

const queryClient = new QueryClient()

function App() {
  const user = useSelector((state) => state.user)
  let location = useLocation()

  return (
    <QueryClientProvider client={queryClient}>
      <RoutesDom>{RenderRoutes(Routes, user, location)}</RoutesDom>
    </QueryClientProvider>
  )
}

export default App
