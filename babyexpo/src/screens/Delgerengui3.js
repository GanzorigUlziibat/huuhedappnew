import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from "react";
import needful from '../components/needful';
import * as SQLite from 'expo-sqlite';

export default function Delgerengui3({ navigation, route }) {
  const db = SQLite.openDatabase('babyDatabase.db');
  const [subItem, setSubItem] = useState([]);
  const { sid } = route.params;

  useEffect(() => {
    // Select query
    db.transaction((tx) => {
      try {
        let query = 'SELECT * FROM baby_subitem WHERE iid = ' + sid + '';

        tx.executeSql(query, [sid], (_, { rows }) => {
          const result = rows._array;
          setSubItem(result);
        });
      } catch (error) {
        console.log('Error executing select query:', error);
      }
    });
  }, []);
  const subItems = () => {
    const tabbody = [];

    for (let i = 0; i < subItem.length; i++) {
      tabbody.push(
        <Pressable
          key={'press' + subItem[i].item_id}
          onPress={() => {
            navigation.navigate("Delgerengui3", { sid: subItem[i].sid });
            // playItemSound(subItemLi[i - 3].iid)
          }}
        >

          <View style={styles.items}>
            <View style={styles.iv}>
              <Image
                style={styles.i}
                key={'item' + subItem[i].item_id}
                source={needful.subitem['item' + subItem[i].iid].image}
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
    <SafeAreaView>
      <View>
        {subItems()}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  items: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  i: {
    width: 300,
    height: 300,
  }
});
