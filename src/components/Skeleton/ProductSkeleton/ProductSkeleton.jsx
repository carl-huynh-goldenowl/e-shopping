import React from "react"
import { Skeleton, SkeletonText, Box, GridItem } from "@chakra-ui/react"

export default function ProductSkeleton({ mergedColNum, pictureHeight }) {
  return (
    <GridItem colSpan={mergedColNum} bg="white" rounded="md" shadow="xl">
      <Box padding="6" boxShadow="lg" bg="white">
        <Skeleton height={`${pictureHeight}rem`} />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    </GridItem>
  )
}
