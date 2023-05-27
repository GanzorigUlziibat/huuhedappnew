import {
    View,
    Text,
    SafeAreaView,
    Platform,
    StatusBar,
    StyleSheet
} from 'react-native'
import React from 'react'
import Tabs from './Tabs';

export default function Nuur() {
    return (
        <SafeAreaView style={styles.container}>
        <Tabs></Tabs>
        <Text>Nuur</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
