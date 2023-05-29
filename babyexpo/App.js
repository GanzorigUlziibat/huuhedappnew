import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Tabs from "./src/screens/Tabs";
import Delgerengui from "./src/screens/Delgerengui";
const HomeStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Tabs"
      >
        <HomeStack.Screen name="Tabs" component={Tabs} />
        <HomeStack.Screen name="Delgerengui" component={Delgerengui} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
