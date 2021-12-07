import React from "react"
import { HStack } from "@chakra-ui/layout"
import { MdStar } from "react-icons/md"
export default function Rating() {
  return (
    <HStack>
      <MdStar w={24} h={24} color="tomato" />
      <MdStar w={24} h={24} color="tomato" />
      <MdStar w={24} h={24} color="tomato" />
      <MdStar w={24} h={24} color="tomato" />
      <MdStar w={24} h={24} />
    </HStack>
  )
}
