import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
} from "react-native";
import * as Font from 'expo-font';
import React, { useEffect, useState } from "react";
import needful from "../components/needful";
import { useSQLiteContext } from "expo-sqlite";

export default function Delgerengui3({ route, navigation }) {
  const db = useSQLiteContext();
  const [subItem, setSubItem] = useState([]);
  const { item_id } = route.params;

  useEffect(() => {
    // Select query
    const fetchData = async () => {
      try {
        let query = "SELECT * FROM baby_subitem WHERE iid = " + item_id + "";
        // console.log(query);
        const result = await db.getAllAsync(query, [item_id]);
        setSubItem(result);
      } catch (error) {
        console.log("Error executing select query:", error);
      }
    };
    fetchData();
  }, []);
  const subItems = () => {
    const tabbody = [];

    for (let i = 0; i < subItem.length; i++) {
      tabbody.push(
        // <Pressable
        //   key={'press' + subItem[i].item_id}
        //   onPress={() => {
        //     navigation.navigate("Delgerengui3", { sid: subItem[i].sid });
        //     // playItemSound(subItemLi[i - 3].iid)
        //   }}
        // >
        // </Pressable >
        <View key={subItem[i].item_id} style={styles.items}>
          <Text key={"txt" + subItem[i].item_id} style={styles.itemtxt}>
            {subItem[i].item_name}
          </Text>
          <Image
            style={styles.i}
            key={"img" + subItem[i].item_id}
            source={needful.subitem["item" + subItem[i].iid].image}
          />
        </View>
      );
    }

    return tabbody;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>{subItems()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  items: {
    justifyContent: "center",
    alignItems: "center",
  },
  i: {
    width: "100%",
    height: 600,
    resizeMode: "contain",
  },
  itemtxt: {
    fontFamily: "Arial",
    fontSize: 40,
    fontWeight: "900",
    textTransform: "lowercase",
  },
});
