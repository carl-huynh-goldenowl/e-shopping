import React from "react"
import { SimpleGrid } from "@chakra-ui/react"
import ProductSkeleton from "../ProductSkeleton"

export default function ProductListSkeleton({
  productTotal,
  colTotal,
  mergedColNum,
  pictureHeight,
}) {
  const tmpList = Array(productTotal).fill(0)
  return (
    <>
      <SimpleGrid columns={colTotal} spacing={3}>
        {tmpList.map((item, index) => (
          <ProductSkeleton
            key={index}
            mergedColNum={mergedColNum}
            pictureHeight={pictureHeight}
          />
        ))}
      </SimpleGrid>
    </>
  )
}
