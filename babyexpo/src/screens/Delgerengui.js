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
import React, { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import needful from "../components/needful";
import { Audio } from "expo-av";
import { useSQLiteContext } from "expo-sqlite";

export default function Delgerengui({ navigation, route }) {
  // const route = useRoute();
  const db = useSQLiteContext();
  const { sid } = route.params;
  const [subItemList, setSubItemList] = useState([]);
  useEffect(() => {
    // Select query
    //amitad
    const fetchData = async () => {
      try {
        let query =
          "SELECT * FROM baby_subitem INNER JOIN baby_subitemcount ON baby_subitem.iid = baby_subitemcount.countid INNER JOIN baby_sub ON baby_subitem.sid = baby_sub.sid WHERE baby_subitem.sid = " +
          sid +
          " AND baby_subitem.active = 1 AND baby_sub.active = 1 ORDER BY CASE WHEN baby_sub.shuffle = 1 THEN RANDOM() ELSE baby_subitem.item_id END";
        // console.log(query);
        const result = await db.getAllAsync(query, []);
        setSubItemList(result);
      } catch (error) {
        console.log("Error executing select query:", error);
      }
    };
    fetchData();
  }, []);

  // const playItemSound = async () => {

  //   try {
  //     const soundObject = new Audio.Sound();
  //     await soundObject.loadAsync(needful.subitem[`item${subItemList[i].iid}`].sound);
  //     await soundObject.playAsync();
  //   } catch (error) {
  //     console.error('Failed to play the sound', error);
  //   }
  // };
  const playItemSound = async (iid) => {
    try {
      const soundObject = new Audio.Sound();
      const soundResource = needful.subitem[`item${iid}`]?.sound;
      if (soundResource) {
        await soundObject.loadAsync(soundResource);
        await soundObject.playAsync();
      } else {
        console.warn("Sound resource not found for item:", iid);
      }
    } catch (error) {
      console.error("Failed to play sound", error);
    }
  };

  // алдааг олсон i утга 0- тэй тэнцүү байж алдаа зөв болно
  const amitadtablist = (ind) => {
    const tabbody = [];
    // console.log(subItemList);
    for (let i = 0; i < subItemList.length; i++) {
      tabbody.push(
        <Pressable
          key={"press" + subItemList[i].item_id}
          onPress={() => {
            navigation.navigate("Delgerengui3", {
              item_id: subItemList[i].iid,
            }) || playItemSound(subItemList[i].iid);
            console.log(subItemList[i].iid);
            alert(i);
          }}
        >
          <View style={styles.items}>
            <View style={styles.iv}>
              <Image
                style={styles.i}
                key={"item" + subItemList[i].item_id}
                source={needful.subitem["item" + subItemList[i].iid].image}
              />
              {/* <Text>{subItemList[i].item_name}</Text> */}
            </View>
          </View>
        </Pressable>
      );
    }

    return tabbody;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <View style={styles.thead}>
          <AntDesign name="arrowleft" style={styles.thicon} />
          {subItemList.length > 0 && (
            <Text style={styles.thtxt} key={"text" + subItemList[1]?.sub_name}>
              {subItemList[1]?.sub_name}
            </Text>
          )}
        </View>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>{amitadtablist()}</View>
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
    fontWeight: "400",
  },
  thead: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: "#5D3FD3",
  },
  thicon: {
    fontSize: 25,
    color: "white",
    margin: 5,
  },
  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    flexGrow: 1,
  },
  items: {
    margin: 5,
    marginTop: 10,
  },
  iv: {
    width: 110,
    height: 160,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 5,
    borderColor: "purple",
  },
  i: {
    width: "100%",
    height: 600,
    resizeMode: "contain",
  },
});
