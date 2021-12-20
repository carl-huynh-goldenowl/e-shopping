import { Box, Center, Spinner } from "@chakra-ui/react"
import React from "react"

export default function LoadingSpinner() {
  return (
    <>
      <Box h="90vh">
        <Center pos={"absolute"} top="50%" left="50%">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.400"
            size="xl"
          />
        </Center>
      </Box>
    </>
  )
}
