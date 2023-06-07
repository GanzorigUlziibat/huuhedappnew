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
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as SQLite from 'expo-sqlite';
import needful from '../components/needful'
export default function Delgerengui({ navigation }) {
  const db = SQLite.openDatabase('babyDatabase.db');

  const [subListamitad, setSubListamitad] = useState([]);
  useEffect(() => {
    // Select query
    db.transaction((tx) => {
      // try {
      //   tx.executeSql('SELECT cat_name from baby_cat inner join baby_sub on baby_cat.cid = baby_sub.cid where baby_cat.active=1 and baby_sub.active=1 order by baby_cat.cat_id, baby_sub.sub_id', [], (_, { rows }) => {
      //     const result = rows._array;
      //     setSubListItems(result);
      //   });
      // } catch (error) {
      //   console.log('Error executing select query:', error);
      // }
      //amitad
      db.transaction((tx) => {
        try {
          tx.executeSql('SELECT * FROM baby_subitem WHERE sid = 1 AND active = 1 ORDER BY item_id', [], (_, { rows }) => {
            const result = rows._array;

            setSubListamitad(result);
            // console.log(result);
          });
        } catch (error) {
          console.log('Error executing select query:', error);
        }
      });
    });
  }, []);
  const amitadtablist = () => {
    // console.log(subListamitad);
    const tabbody = [];
    for (i = 0; i < subListamitad.length; i++) {
      // console.log('item' + subListamitad[i].item_id);
      tabbody.push(<View style={styles.items}>
        <View  >
          <Image
            style={styles.i}
            source={needful.subitem['item' + (subListamitad[i].item_id + 1)].image}
          ></Image>
          {/* <Text>{subListamitad[i].item_name}</Text> */}
        </View>
      </View>)
    }
    return tabbody;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <View style={styles.thead}>
          <AntDesign name="arrowleft" style={styles.thicon}></AntDesign>
          <Text style={styles.thtxt}>Амьтад</Text>
          {/* {amitadtablist()} */}
        </View>
      </Pressable>
      <ScrollView>
        {amitadtablist()}
        {/* <View style={styles.items}>
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
        </View> */}
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
    // resizeMode: "stretch",
  },

});
