import React from "react"
import {
  Skeleton,
  SimpleGrid,
  GridItem,
  HStack,
  SkeletonText,
} from "@chakra-ui/react"

export default function ProductDetailSkeleton() {
  return (
    <SimpleGrid spacing={6}>
      <SimpleGrid
        columns={12}
        spacing={6}
        p={6}
        bg="white"
        boxShadow="xl"
        rounded="md"
      >
        <GridItem colSpan={5}>
          <SimpleGrid columns={1} spacing={3}>
            <GridItem>
              <Skeleton h="30rem" />
            </GridItem>
            <GridItem>
              <HStack spacing={3} justifyContent="center">
                <Skeleton h="5rem" w="5rem" />
                <Skeleton h="5rem" w="5rem" />
                <Skeleton h="5rem" w="5rem" />
                <Skeleton h="5rem" w="5rem" />
                <Skeleton h="5rem" w="5rem" />
              </HStack>
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={7}>
          <SimpleGrid columns={4} spacing={6} alignItems="center">
            <GridItem colSpan={4}>
              <SkeletonText noOfLines={3} spacing="4" />
            </GridItem>
            <GridItem colSpan={4}>
              <Skeleton h="3rem" w="50%" />
            </GridItem>
            <GridItem colSpan={4}>
              <Skeleton h="4rem" />
            </GridItem>
            <GridItem colSpan={4}>
              <SkeletonText noOfLines={5} spacing="4" />
            </GridItem>

            <GridItem colSpan={4} paddingTop={6}>
              <HStack spacing={2}>
                <Skeleton h="3rem" w="10rem" />
                <Skeleton h="3rem" w="10rem" />
              </HStack>
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </SimpleGrid>
  )
}
