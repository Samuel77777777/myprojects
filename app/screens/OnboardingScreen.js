import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      color: "#000000",
      marginHorizontal: 8,
    }}
    {...props}
  >
    <Text
      style={{
        fontSize: 16,
      }}
    >
      Done
    </Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      DoneButtonComponent={Done}
      onSkip={() => navigation.navigate("welcome")}
      onDone={() => navigation.navigate("welcome")}
      pages={[
        {
          backgroundColor: "#ffff",
          image: (
            <Image
              source={require("../assets/logo.png")}
              resizeMode="contain"
              style={{
                width: 200,
                height: 200,
                borderRadius: 5,
              }}
            />
          ),
          title: "Welcome",
          subtitle:
            "To solar power where you can find the best panel for your house",
        },
        {
          backgroundColor: "#ffff",
          image: (
            <Image
              source={require("../assets/logo.png")}
              resizeMode="contain"
              style={{
                width: 200,
                height: 200,
              }}
            />
          ),
          title: " Welcome",
          subtitle: "You can catch up with the latest product",
        },
        {
          backgroundColor: "#ffff",
          image: (
            <Image
              source={require("../assets/logo.png")}
              resizeMode="contain"
              style={{
                width: 200,
                height: 200,
              }}
            />
          ),
          title: "Welcome",
          subtitle: " you can purchase any of our product using the App",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
