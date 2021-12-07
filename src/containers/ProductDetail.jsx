import React from "react"
import { GridItem, Text } from "@chakra-ui/layout"
import { Table, Tbody, Tr, Td } from "@chakra-ui/react"

const ProductDetail = ({ productDetail, description }) => {
  return (
    <>
      <GridItem bg="white" boxShadow="xl" rounded="md" p={6}>
        <Text fontSize="2xl" p={3} bg="gray.100" w="100%">
          CHI TIẾT SẢN PHẨM
        </Text>
        <Table variant="simple" w="100%">
          <Tbody>
            <Tr>
              <Td>Thương hiệu</Td>
              <Td>{productDetail.trademark}</Td>
            </Tr>
            <Tr>
              <Td>Hạn bảo hành</Td>
              <Td>{productDetail.warrantyPeriod}</Td>
            </Tr>
            <Tr>
              <Td>Loại bảo hành</Td>
              <Td>{productDetail.warrantyType}</Td>
            </Tr>
            <Tr>
              <Td>Loại laptop</Td>
              <Td>{productDetail.laptopType}</Td>
            </Tr>
            <Tr>
              <Td>Tình trạng</Td>
              <Td>{productDetail.status}</Td>
            </Tr>
            <Tr>
              <Td>Kho hàng</Td>
              <Td>{productDetail.quantity}</Td>
            </Tr>
            <Tr>
              <Td>Gửi từ</Td>
              <Td>{productDetail.sendFrom}</Td>
            </Tr>
          </Tbody>
        </Table>
        <Text fontSize="2xl" p={3} mt={16} bg="gray.100" w="100%">
          MÔ TẢ SẢN PHẨM
        </Text>
        <Text fontSize="md" p="1rem 1rem 0 1rem">
          {description}
        </Text>
      </GridItem>
    </>
  )
}

export default ProductDetail
