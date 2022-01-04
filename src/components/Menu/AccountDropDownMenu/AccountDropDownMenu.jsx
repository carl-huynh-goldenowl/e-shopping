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
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Routes } from "routes/Routes"
import { deleteCart } from "store/slices/cartSlice"
import { signOut } from "store/slices/userSlice"

export default function AccountDropDownMenu({ email, color }) {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const user = useSelector((state) => state.user)

  const handleSignOut = useCallback(() => {
    dispatch(signOut())
    dispatch(deleteCart())
  }, [dispatch])

  const handleRedirectAdminPage = useCallback(() => {
    if (user.isAdmin) {
      navigate(Routes.admin.path, { replace: true })
    }
  }, [navigate])

  return (
    <Menu>
      <HStack>
        <MenuButton>
          <Icon w="3rem" h="3rem" color={color} as={MdOutlineAccountCircle} />
        </MenuButton>
        <Text fontSize="lg" isTruncated color={color}>
          {email}
        </Text>
      </HStack>

      <MenuList>
        {user.isAdmin && (
          <MenuItem onClick={handleRedirectAdminPage}>
            Trang quản lý sản phẩm
          </MenuItem>
        )}
        <MenuItem onClick={handleSignOut}>Đăng xuất</MenuItem>
      </MenuList>
    </Menu>
  )
}
