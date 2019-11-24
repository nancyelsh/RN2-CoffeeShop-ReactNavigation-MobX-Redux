import React, { Component } from "react";

// Styling Components
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";
import styles from "./styles";

class Login extends Component {
  handlePress = () => this.props.navigation.navigate("CoffeeList");
  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.authButton}>
          <Text onPress={this.handlePress} style={styles.authButtonText}>
            Log in
          </Text>
        </TouchableOpacity>
        <Text style={styles.authOther} onPress={this.handlePress}>
          Click here to register!
        </Text>
      </View>
    );
  }
}

Login.navigationOptions = {
  title: "Login"
};

export default Login;
