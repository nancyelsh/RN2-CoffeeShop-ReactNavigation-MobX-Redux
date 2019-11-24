import { createStackNavigator } from "react-navigation-stack";

// Components
import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";
import Login from "../Components/Authentication/Login";

const StackNav = createStackNavigator(
  {
    CoffeeCart: CoffeeCart,
    CoffeeDetail: CoffeeDetail,
    CoffeeList: CoffeeList,
    Login: Login
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
