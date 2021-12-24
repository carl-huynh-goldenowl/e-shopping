import {
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react"
import React, { useCallback } from "react"
import { MdOutlineAccountCircle } from "react-icons/md"
import { useDispatch } from "react-redux"
import { signOut } from "store/slices/userSlice"

export default function AccountDropDownMenu({ email }) {
  const dispatch = useDispatch()

  const handleSignOut = useCallback(() => {
    dispatch(signOut())
  }, [])

  return (
    <Menu>
      <HStack>
        <MenuButton>
          <Icon w="3rem" h="3rem" color="white" as={MdOutlineAccountCircle} />
        </MenuButton>
        <Text fontSize="lg" isTruncated color="white">
          {email}
        </Text>
      </HStack>

      <MenuList>
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </MenuList>
    </Menu>
  )
}
