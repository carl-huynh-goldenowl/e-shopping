import React from "react"
import {
  Container,
  Box,
  SimpleGrid,
  GridItem,
  Heading,
  Stack,
  Text,
  FormControl,
  InputGroup,
  IconButton,
  Input,
  //HStack,
} from "@chakra-ui/react"
import { FiSend } from "react-icons/fi"
import { Trans, useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box bg="teal.200">
      <Container maxW="container.xl" py={4}>
        <SimpleGrid columns={12} spacing={2}>
          <GridItem colSpan={{ md: 6, sm: 12 }}>
            <Heading as="h3" size="lg">
              eShopping
            </Heading>
            <br />
            <Text fontSize="lg">
              <Trans i18nKey="footer.info" components={{ bold: <strong /> }} />
            </Text>
            <br />
            <Stack spacing={0}>
              <Text fontSize="md">MB Bank Building, 538 CMT8</Text>
              <Text fontSize="md">Ward 11, District 3,</Text>
              <Text fontSize="md">Ho Chi Minh City</Text>
              <Text fontSize="md">(+84) 2838 4600 98</Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={{ md: 6, sm: 12 }}>
            <SimpleGrid columns={2} spacing={1}>
              <GridItem colSpan={2} h="7rem">
                <Heading as="h5" size="md">
                  {t("footer.titleEmailInput")}
                </Heading>
                <br />
                <FormControl id="email">
                  <InputGroup spacing={0}>
                    <Input
                      variant="filled"
                      placeholder={t("footer.yourEmail")}
                      borderTopRightRadius="0"
                      borderBottomRightRadius="0"
                      _focus={{
                        background: "white",
                      }}
                      type="email"
                    />
                    <IconButton
                      borderTopLeftRadius="0"
                      borderBottomLeftRadius="0"
                      padding="0 2rem"
                      colorScheme="teal"
                      aria-label="Sign up to receive promotion"
                      icon={<FiSend />}
                    />
                  </InputGroup>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}></GridItem>
              <GridItem colSpan={1}></GridItem>
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Container>

      {/* <Box bg="teal.300" py={3}>
        <Container maxW="container.xl">
          <Heading as="h5" size="md">
            Catalogue
          </Heading>
          <HStack spacing={5}>
            <a href="link1">Link1</a>
            <span>|</span>
            <a href="link2">Link2</a>
            <span>|</span>
            <a href="link3">Link3</a>
            <span>|</span>
            <a href="link4">Link4</a>
            <span>|</span>
            <a href="link5">Link5</a>
          </HStack>
        </Container>
      </Box> */}
    </Box>
  )
}

export default Footer
