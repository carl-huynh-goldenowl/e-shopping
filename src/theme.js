import { extendTheme } from "@chakra-ui/react"
import { AccountDropDownMenuStyle as AccountDropDownMenu } from "components/Menu/AccountDropDownMenu"

const theme = extendTheme({
  components: {
    AccountDropDownMenu,
  },
})

export default theme
