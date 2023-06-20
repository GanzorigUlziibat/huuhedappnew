import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Delgerengui3() {
  return (
    <SafeAreaView>
    <View style={styles.Text1}>
      <Text style={styles.text2}>Анааш</Text>
    </View>
    <ScrollView>
    <View style={styles.gif2}>
      <Image  source={require("../images/gif/giphy.gif")}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Text1: {
        marginLeft: 165,
        marginTop: 70,
    },
    text2: {
        fontSize: 30,
    },
    gif2: {
        marginLeft: 35,
        marginTop: 120,
    },
});