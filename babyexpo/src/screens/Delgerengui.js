import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";

export default function Delgerengui() {
  return (
    <SafeAreaView>
      <ScrollView style={style.container}>
        <View>
          <Text>Delgerengui</Text>
          <Image
            style={styles.family}
            source={require("../images/fox.png")}
          ></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  family: {
    width: 80,
    height: 70,
  },
});
