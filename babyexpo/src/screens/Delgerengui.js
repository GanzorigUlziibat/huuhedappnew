import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Platform,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Delgerengui({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <Pressable onPress={() => navigation.goBack()}>
      <View style={styles.thead}>
        <AntDesign name="arrowleft" style={styles.thicon}></AntDesign>
        <Text style={styles.thtxt}>Амьтад</Text>
      </View>
      </Pressable>
      <ScrollView>
      <View style={styles.items}>
        <View>
          <Image
            style={styles.i}
            source={require("../images/pngtree.jpg")}
          ></Image>
        </View>
        <View>
          <Image
            style={styles.i}
            source={require("../images/pngtree.jpg")}
          ></Image>
        </View>

        <View>
          <Image
            style={styles.i}
            source={require("../images/pngtree.jpg")}
          ></Image>
        </View>
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
  thtxt: {
    fontSize: 20,
    color: "white",
    fontWeight: "400"
  },
  thead: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: "#5D3FD3"
  },
  thicon: {
    fontSize: 25,
    color: "white",
    margin: 5,
  },
  items: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: 10,
  },
  i: {
    width: 120,
    height: 160,
    borderRadius: 12,
    borderWidth: 5,
    margin: 5,
    borderColor: "purple",
  },

});
