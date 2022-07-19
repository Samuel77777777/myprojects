import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Packs from "./app/screens/Packs";
import OnboardingScreen from "./app/screens/OnboardingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import Tabs from "./app/screens/Tabs";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

const AppStack = createStackNavigator();

const App = () => {
  return (
    // <OnboardingScreen />
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Onboard" component={OnboardingScreen} />
        <AppStack.Screen name="welcome" component={WelcomeScreen} />
        <AppStack.Screen name="login" component={LoginScreen} />
        <AppStack.Screen name="register" component={RegisterScreen} />
        <AppStack.Screen name="Tabs" component={Tabs} />
        <AppStack.Screen name="Details" component={ListingDetailsScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>
  );
};
export default App;
