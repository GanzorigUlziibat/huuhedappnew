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
// import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as SQLite from 'expo-sqlite';
import needful from '../components/needful'
export default function Delgerengui({ navigation, route }) {
  // const route = useRoute();
  const db = SQLite.openDatabase('babyDatabase.db');
  const { sid } = route.params;
  const [subItemList, setSubItemList] = useState([]);
  // const [subList, setSubList] = useState([]);
  useEffect(() => {
    // Select query
    //amitad
    db.transaction((tx) => {
      try {

        let query = 'SELECT * FROM baby_subitem INNER JOIN baby_sub ON baby_subitem.sid = baby_sub.sid WHERE baby_sub.sid = ' + sid + ' AND baby_subitem.active = 1 AND baby_sub.active = 1 ORDER BY sid';
        console.log(query);
        tx.executeSql(query, [], (_, { rows }) => {
          const result = rows._array;

          setSubItemList(result);

        });
      } catch (error) {
        console.log('Error executing select query:', error);
      }
    });
    // db.transaction((tx) => {
    //   try {
    //     tx.executeSql('SELECT * from baby_sub inner join baby_cat where baby_sub.active=1 order by baby_cat.cid and sid', [], (_, { rows }) => {
    //       const result = rows._array;
    //       setSubList(result);
    //     });
    //   } catch (error) {
    //     console.log('Error executing select query:', error);
    //   }

    // });
  }, []);
  const amitadtablist = () => {
    // console.log(subItemList);
    const tabbody = [];

    for (i = 0; i < subItemList.length; i++) {
      // tabbody.push(<Text>123</Text>)
      // { console.log('item' + (subItemList[i].iid)) }
      tabbody.push(
        <View style={styles.items}>
          <View style={styles.iv}>
            <Image
              style={styles.i}
              key={'item' + (subItemList[i].iid)}
              source={needful.subitem['item' + (subItemList[i].iid)].image}
            ></Image>
            {/* <Text>{subItemList[i].item_name}</Text> */}
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
          {subItemList.length > 0 && (
            <Text style={styles.thtxt} key={'text' + subItemList[1]?.sub_name}>
              {subItemList[1]?.sub_name}
            </Text>
          )}
          {/* <Text style={styles.thtxt} key={'text' + (subItemList[i].iid)}>{subItemList[1]?.sub_name}</Text> */}
          {/* <Text style={styles.thtxt}>{setSubList[1].sub_name}</Text> */}
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
