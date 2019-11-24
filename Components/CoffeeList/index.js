import React from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";
import CartButton from "../Buttons/CartButton";

const CoffeeList = () => {
  const coffeeshopList = coffeeshops.map(coffeeshop => (
    <CoffeeItem coffeeshop={coffeeshop} key={coffeeshop.id} />
  ));
  return (
    <Content>
      <List>{coffeeshopList}</List>
    </Content>
  );
};

CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerRight: <CartButton />
};

export default CoffeeList;
