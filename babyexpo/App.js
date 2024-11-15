import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Tabs from "./src/screens/Tabs";
import Delgerengui from "./src/screens/Delgerengui";
import Home from "./src/screens/Home";
import Delgerengui3 from "./src/screens/Delgerengui3";
import { SQLiteProvider } from "expo-sqlite";

const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
    <SQLiteProvider
      databaseName="babyDatabase.db"
      assetSource={{ assetId: require("./assets/babyDatabase.db") }}
    >
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
    </SQLiteProvider>
  );
}
