import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme/theme'

export default function HomeScreen() {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: themeColors.bg, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: themeColors.text, fontSize: 24, fontWeight: 'bold'}}>
                HomeScreen
            </Text>
        </SafeAreaView>
    )
}
