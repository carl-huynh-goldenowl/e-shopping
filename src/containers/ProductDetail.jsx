import React from "react"
import { GridItem, Text } from "@chakra-ui/layout"
import { Table, Tbody, Tr, Td } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const ProductDetail = ({ productDetail, description }) => {
  const { t } = useTranslation()

  return (
    <GridItem bg="white" boxShadow="xl" rounded="md" p={6}>
      <Text fontSize="2xl" p={3} bg="gray.100" w="100%">
        {t("productDetailPage.productDetail")}
      </Text>
      <Table variant="simple" w="100%">
        <Tbody>
          <Tr>
            <Td>{t("productDetailPage.trademark")}</Td>
            <Td>{productDetail?.trademark}</Td>
          </Tr>
          <Tr>
            <Td>{t("productDetailPage.warrantyPeriod")}</Td>
            <Td>{productDetail?.warrantyPeriod}</Td>
          </Tr>
          <Tr>
            <Td>{t("productDetailPage.warrantyType")}</Td>
            <Td>{productDetail?.warrantyType}</Td>
          </Tr>
          <Tr>
            <Td>{t("productDetailPage.laptopType")}</Td>
            <Td>{productDetail?.laptopType}</Td>
          </Tr>
          <Tr>
            <Td>{t("productDetailPage.status")}</Td>
            <Td>{productDetail?.status}</Td>
          </Tr>
          <Tr>
            <Td>{t("productDetailPage.quantity")}</Td>
            <Td>{productDetail?.quantity}</Td>
          </Tr>
          <Tr>
            <Td>{t("productDetailPage.sendFrom")}</Td>
            <Td>{productDetail?.sendFrom}</Td>
          </Tr>
        </Tbody>
      </Table>
      <Text fontSize="2xl" p={3} mt={16} bg="gray.100" w="100%">
        {t("productDetailPage.description")}
      </Text>
      <Text fontSize="md" p="1rem 1rem 0 1rem">
        {description}
      </Text>
    </GridItem>
  )
}

export default ProductDetail
