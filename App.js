import React, { Component } from "react";
import { Spinner, Header, Container } from "native-base";

// Components
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import CoffeeList from "./Components/CoffeeList";
import CoffeeDetail from "./Components/CoffeeDetail";
import CoffeeCart from "./Components/CoffeeCart";
import AppContainer from "./Navigation/node";

export default class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="#132D4B" />;
    }
    return (
      <Container>
        <AppContainer />
      </Container>
    );
  }
}
