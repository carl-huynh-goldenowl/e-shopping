import React from "react"
import { Routes as RoutesDom } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { RenderRoutes } from "routes/Routes"
import { Routes } from "routes/Routes"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesDom>{RenderRoutes(Routes)}</RoutesDom>
    </QueryClientProvider>
  )
}

export default App
