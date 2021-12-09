import React from "react"
import { GridItem, SimpleGrid } from "@chakra-ui/layout"

import ProductDetailSkeleton from "../components/Skeleton/ProductDetailSkeleon"
import ProductListSkeleton from "../components/Skeleton/ProductListSkeleton"
import { SkeletonText } from "@chakra-ui/skeleton"

const ProductDetailPageSkeleton = () => {
  return (
    <SimpleGrid spacing={6}>
      <ProductDetailSkeleton />
      <SimpleGrid columns={12} spacing={6} alignItems="flex-start">
        <GridItem colSpan={9}>
          <SimpleGrid columns={1} spacing={6}>
            <GridItem bg="white" p={6}>
              <SkeletonText noOfLines={20} spacing="4" />
            </GridItem>
            <GridItem>
              <ProductListSkeleton
                productTotal={5}
                colTotal={5}
                mergedColNum={1}
                pictureHeight={8}
              />
            </GridItem>
            <GridItem>
              <ProductListSkeleton
                productTotal={5}
                colTotal={5}
                mergedColNum={1}
                pictureHeight={8}
              />
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={3}>
          <ProductListSkeleton
            productTotal={3}
            colTotal={1}
            mergedColNum={1}
            pictureHeight={15}
          />
        </GridItem>
      </SimpleGrid>
    </SimpleGrid>
  )
}

export default ProductDetailPageSkeleton
