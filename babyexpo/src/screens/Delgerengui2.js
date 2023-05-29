import { View, Text, ScrollView, SafeAreaView, StyleSheet, StatusBar, Platform, Image } from 'react-native'
import React from 'react'
import {AntDesign} from 'react-native-vector-icons'

export default function Delgerengui2() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animal}>
        <AntDesign style={styles.faicon} name="arrowleft"/>
      <Text style={styles.family}>Гэр бүл</Text>
      </View>
    <ScrollView>
    <View>
      <Image style={styles.faimg} source={require('../images/child.jpg')}/>
    </View>
    <View>
      <Image style={styles.faimg1} source={require('../images/grandma.jpg')}/>
    </View>
    <View>
      <Image style={styles.faimg2} source={require('../images/daddy.jpg')}/>
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
    fontSize: 25,
    marginLeft: 1,
  },
  faimg: {
    marginTop: 20,
    width: 130,
    height: 180,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "blue",
  },
  faimg1: {
    marginTop: -180,
    width: 130,
    height: 180,
    borderRadius: 12,
    marginLeft: 140,
    borderWidth: 3,
    borderColor: "blue",
  },
  faimg2: {
    marginTop: -180,
    width: 130,
    height: 180,
    borderRadius: 12,
    marginLeft: 280,
    borderWidth: 3,
    borderColor: "blue",
  },
  faicon: {
    fontSize: 25,
    margin: 10,
  },
  animal: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
  }
});