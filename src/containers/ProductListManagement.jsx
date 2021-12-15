import React from "react"
import {
  SimpleGrid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react"
import AllProductsTabPanel from "../components/TabPanel/AllProductsTabPanel"
import FindProductForm from "../components/Form/FindProductForm/FindProductForm"

export default function ProductListManagement() {
  return (
    <SimpleGrid columns={12} spacing={3}>
      <GridItem colSpan={12} bg="white" rounded={"md"} shadow={"xl"} p={6}>
        <FindProductForm />
      </GridItem>
      <GridItem colSpan={12} bg="white" rounded={"md"} shadow={"xl"} p={6}>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Tất cả</Tab>
            <Tab>Đang hoạt động</Tab>
            <Tab>Hết hàng</Tab>
            <Tab>Đã ẩn</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <AllProductsTabPanel />
            </TabPanel>
            <TabPanel>
              <p>Đang hoạt động</p>
            </TabPanel>
            <TabPanel>
              <p>Hết hàng</p>
            </TabPanel>
            <TabPanel>
              <p>Đã ẩn</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </SimpleGrid>
  )
}
