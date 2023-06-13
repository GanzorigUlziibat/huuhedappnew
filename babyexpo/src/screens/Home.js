import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function Home() {
    useEffect(() => { alert(123) })
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}