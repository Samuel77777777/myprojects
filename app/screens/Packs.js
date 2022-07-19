import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";

const MyComponent = ({ navigation }) => (
  <ScrollView>
    <Card style={styles.shadow}>
      <Card.Content style={styles.shadow}>
        <Title>Solar tracker</Title>
        <Paragraph>Latest product hurry up and grab it now</Paragraph>
      </Card.Content>
      <Card.Cover source={require("../assets/pan.jpg")} />
      <Card.Actions>
        <Button onPress={() => navigation.navigate("Details")}>
          View Details
        </Button>
      </Card.Actions>

      <Card.Content>
        <Title>Solar tracker</Title>
        <Paragraph>Latest product hurry up and grab it now</Paragraph>
      </Card.Content>
      <Card.Cover source={require("../assets/com.jpeg")} />
      <Card.Actions>
        <Button onPress={() => navigation.navigate("Details")}>
          View Details
        </Button>
      </Card.Actions>

      <Card.Content>
        <Title>Solar tracker</Title>
        <Paragraph>Latest product hurry up and grab it now</Paragraph>
      </Card.Content>
      <Card.Cover source={require("../assets/pe.jpeg")} />
      <Card.Actions>
        <Button onPress={() => navigation.navigate("Details")}>
          View Details
        </Button>
      </Card.Actions>

      <Card.Content>
        <Title>Solar tracker</Title>
        <Paragraph>Latest product hurry up and grab it now</Paragraph>
      </Card.Content>
      <Card.Cover source={require("../assets/sl.jpg")} />
      <Card.Actions>
        <Button onPress={() => navigation.navigate("Details")}>
          View Details
        </Button>
      </Card.Actions>

      <Card.Content>
        <Title>Solar tracker</Title>
        <Paragraph>Latest product hurry up and grab it now</Paragraph>
      </Card.Content>
      <Card.Cover source={require("../assets/pl.jpg")} />
      <Card.Actions>
        <Button onPress={() => navigation.navigate("Details")}>
          View Details
        </Button>
        <Button>Ok</Button>
      </Card.Actions>

      <Card.Content>
        <Title>Solar tracker</Title>
        <Paragraph>Latest product hurry up and grab it now</Paragraph>
      </Card.Content>
      <Card.Cover source={require("../assets/kj.jpg")} />
      <Card.Actions>
        <Button onPress={() => navigation.navigate("Details")}>
          View Details
        </Button>
      </Card.Actions>
    </Card>
  </ScrollView>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden",
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default MyComponent;
