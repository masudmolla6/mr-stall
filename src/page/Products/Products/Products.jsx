import React, { useState } from 'react';
import useProducts from '../../../Hooks/useProducts/useProducts';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductTab from '../ProductTab/ProductTab';

const Products = () => {
    const [products, refetch, loading] = useProducts();
    const [tabIndex, setTabIndex] = useState(0)
    
    const apple = products.filter((item) => item.Brand === "Apple");
    const lenovo = products.filter((item) => item.Brand === "Lenovo");
    const hp = products.filter((item) => item.Brand === "HP");
    const dell = products.filter((item) => item.Brand === "Dell");
    const acer = products.filter((item) => item.Brand === "Acer");
    const asus = products.filter((item) => item.Brand === "Asus");
    const walton = products.filter((item) => item.Brand === "Walton");

    return (
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-center">
          <Tab>Apple</Tab>
          <Tab>Hp</Tab>
          <Tab>Asus</Tab>
          <Tab>Lenovo</Tab>
          <Tab>Dell</Tab>
          <Tab>Acer</Tab>
          <Tab>Walton</Tab>
        </TabList>
        <TabPanel>
          <ProductTab items={apple}></ProductTab>
        </TabPanel>
        <TabPanel>
          <ProductTab items={hp}></ProductTab>
        </TabPanel>
        <TabPanel>
          <ProductTab items={asus}></ProductTab>
        </TabPanel>
        <TabPanel>
          <ProductTab items={lenovo}></ProductTab>
        </TabPanel>
        <TabPanel>
          <ProductTab items={dell}></ProductTab>
        </TabPanel>
        <TabPanel>
          <ProductTab items={acer}></ProductTab>
        </TabPanel>
        <TabPanel>
          <ProductTab items={walton}></ProductTab>
        </TabPanel>
      </Tabs>
    );
};

export default Products;