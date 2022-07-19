import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/pk.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Panel for sale</Text>
        <Text style={styles.price}>
          This is our latest model of our panel hurry up and grab it now it is
          best in the town for now This is our latest model of our panel hurry
          up and grab it now it is best in the town for now This is our latest
          model of our panel hurry up and grab it now it is best in the town for
          now
        </Text>
        <Text>$100</Text>
        <View style={styles.userContainer}>
          <Button title="add to cart" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.dark,
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
