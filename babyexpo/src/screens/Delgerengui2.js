import { View, Text, ScrollView, SafeAreaView, StyleSheet, StatusBar, Platform, Image } from 'react-native'
import React from 'react'

export default function Delgerengui2() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View>
      <Image style={styles.family} source={require("../images/navch.jpg")}/>
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
    width:80,
    height: 80,
  }
});