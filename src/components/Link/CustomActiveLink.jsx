import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function CustomActiveLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <div>
      <Link
        style={{
          color: match ? "teal" : "black",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  )
}
