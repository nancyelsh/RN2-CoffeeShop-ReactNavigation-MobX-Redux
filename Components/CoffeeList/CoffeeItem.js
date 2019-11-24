import React from "react";
import { ImageBackground, View } from "react-native";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const CoffeeItem = ({ navigation, coffeeshop }) => {
  const handlePress = () =>
    navigation.navigate("CoffeeDetail", {
      coffeeshopID: coffeeshop.id,
      coffeeshopName: coffeeshop.name
    });

  return (
    <ImageBackground source={coffeeshop.background} style={styles.background}>
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={coffeeshop.img}
                style={styles.thumbnail}
              />
              <Text style={styles.text}>{coffeeshop.name}</Text>
              <Text note style={styles.text}>
                {coffeeshop.distance}
              </Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default withNavigation(CoffeeItem);
