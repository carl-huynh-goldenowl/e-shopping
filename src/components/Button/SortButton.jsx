import React from "react"
import { Button } from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"

export default function SortButton({ title, isDesc, ...childrend }) {
  return (
    <Button
      {...childrend}
      rightIcon={isDesc ? <TriangleDownIcon /> : <TriangleUpIcon />}
      variant="ghost"
    >
      {title}
    </Button>
  )
}
