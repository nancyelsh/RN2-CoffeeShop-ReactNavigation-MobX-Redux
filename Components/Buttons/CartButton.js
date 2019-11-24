import React from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

const CartButton = ({ navigation }) => {
  return (
    <Icon
      name="shoppingcart"
      type="AntDesign"
      style={{ color: "white" }}
      onPress={() => navigation.navigate("CoffeeCart")}
    />
  );
};

export default withNavigation(CartButton);
