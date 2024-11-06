import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme/theme';  // Assuming your theme colors are exported from here

export default function WelcomeScreen() {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.w }}>
        <View style={{ flex: 1, justifyContent: 'space-around', marginTop: 16, marginBottom: 16 }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', color: themeColors.text }}>
                Welcome
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image 
                    source={require("../assets/images/welcome.png")}
                    style={{ width: 350, height: 350 }} 
                />
            </View>
            <View style={{ marginHorizontal: 28 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={{
                        paddingVertical: 12,
                        backgroundColor: themeColors.button,
                        borderRadius: 16,
                        marginBottom: 16,
                    }}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: themeColors.textSecondary }}>
                        SignUp
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12 }}>
                    <Text style={{ color: themeColors.text }}>Sudah memiliki akun?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontWeight: 'bold', color: themeColors.primary }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  );
}