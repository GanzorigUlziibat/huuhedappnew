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
      tabbody.push(
        <View style={styles.items}>
          <View style={styles.iv}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          {amitadtablist()}
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
  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    flexGrow: 1,
  },
  items: {
    margin: 5,
    marginTop: 10
  },
  iv: {
    width: 110,
    height: 160,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 5,
    borderColor: "purple",
  },
  i: {
    width: '100%',
    height: 600,
    resizeMode: "contain",
  },

});
