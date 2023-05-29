import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Delgerengui() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animal}>
        <AntDesign name="arrowleft" style={styles.headicon}></AntDesign>
        <Text style={styles.ugnuud}>Амьтад</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.ugnuud}></Text>
          <Image
            style={styles.family}
            source={require("../images/123.jpg")}
          ></Image>
        </View>
        <View>
          <Image
            style={styles.family2}
            source={require("../images/fox.png")}
          ></Image>
        </View>

        <View>
          <Image
            style={styles.family1}
            source={require("../images/cat.png")}
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
    width: 110,
    height: 160,
    marginTop: 20,
    borderRadius: 12,
    marginLeft: 8,
    borderWidth: 5,
    borderColor: "purple",
  },
  ugnuud: {
    fontSize: 25,
  },
  animal: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
  },
  headicon: {
    fontSize: 25,
    margin: 10,
  },
  family1: {
    width: 110,
    height: 160,
    borderRadius: 12,
    marginTop: -160,
    marginLeft: 281,
    borderWidth: 5,
    borderColor: "purple",
  },
  family2: {
    width: 110,
    height: 160,
    marginTop: -160,
    marginLeft: 140,
    borderRadius: 12,
    borderWidth: 5,
    borderColor: "purple",
  },
});
