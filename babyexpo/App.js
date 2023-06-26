import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Tabs from "./src/screens/Tabs";
import Delgerengui from "./src/screens/Delgerengui";
import Home from "./src/screens/Home";
import Delgerengui3 from "./src/screens/Delgerengui3";
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
        <HomeStack.Screen name="Delgerengui3" component={Delgerengui3} />
        <HomeStack.Screen name="Home" component={Home} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
