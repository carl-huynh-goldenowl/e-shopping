import React from "react"
import { Outlet } from "react-router-dom"
import CommonLayout from "layout/common/CommonLayout"

export default function Homepage() {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  )
}
