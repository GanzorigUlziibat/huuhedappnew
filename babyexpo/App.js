import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Nuur from "./src/screens/Nuur";
import Tabs from "./src/screens/Tabs";
const HomeStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Nuur"
      >
        <HomeStack.Screen name="Nuur" component={Nuur} />
        <HomeStack.Screen name="Tabs" component={Tabs} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
