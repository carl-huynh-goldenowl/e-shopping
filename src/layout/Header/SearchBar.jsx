import React from "react"
import { FormControl, Input, InputGroup } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

const SearchBar = () => {
  const handleClick = () => {
    alert("Search")
  }
  return (
    <>
      <FormControl id="email">
        <InputGroup spacing={0}>
          <Input
            variant="filled"
            placeholder="Search..."
            borderTopRightRadius="0"
            borderBottomRightRadius="0"
            _focus={{
              background: "white",
            }}
          />
          <IconButton
            borderTopLeftRadius="0"
            borderBottomLeftRadius="0"
            padding="0 2rem"
            colorScheme="teal"
            aria-label="Search database"
            icon={<SearchIcon />}
            onClick={handleClick}
          />
        </InputGroup>
      </FormControl>
    </>
  )
}

export default SearchBar
