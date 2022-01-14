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
import FindProductForm from "forms/FindProductForm"
import AllProductsTabPanel from "components/TabPanel/AllProductsTabPanel"
import { useTranslation } from "react-i18next"

export default function ProductListManagement() {
  const { t } = useTranslation()

  return (
    <SimpleGrid columns={12} spacing={3}>
      <GridItem colSpan={12} bg="white" rounded={"md"} shadow={"xl"} p={6}>
        <FindProductForm />
      </GridItem>
      <GridItem colSpan={12} bg="white" rounded={"md"} shadow={"xl"} p={6}>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>{t("productsManagement.tabs.all")}</Tab>
            <Tab>{t("productsManagement.tabs.active")}</Tab>
            <Tab>{t("productsManagement.tabs.outOfStock")}</Tab>
            <Tab>{t("productsManagement.tabs.hidden")}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <AllProductsTabPanel />
            </TabPanel>
            <TabPanel>
              <p>{t("productsManagement.tabs.active")}</p>
            </TabPanel>
            <TabPanel>
              <p>{t("productsManagement.tabs.outOfStock")}</p>
            </TabPanel>
            <TabPanel>
              <p>{t("productsManagement.tabs.hidden")}</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </SimpleGrid>
  )
}
