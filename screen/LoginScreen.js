import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import React from 'react';
import { themeColors } from '../theme/theme';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: 'yellow', padding: 10, borderBottomLeftRadius: 20, marginLeft: 20 }}>
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/images/welcome.png')} style={{ width: 200, height: 200 }} />
        </View>

        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 30, paddingTop: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: themeColors.primary, marginLeft: 10 }}>Email Address</Text>
            <TextInput
              style={{ padding: 10, backgroundColor: '#f1f1f1', borderRadius: 25, marginBottom: 15 }}
              value='loreninsum@gmaial.com'
              placeholder='Enter Email'
            />
            <Text style={{ color: themeColors.primary, marginLeft: 10 }}>Password</Text>
            <TextInput
              style={{ padding: 10, backgroundColor: '#f1f1f1', borderRadius: 25 }}
              secureTextEntry
              value='member123'
              placeholder='Enter Password'
            />
            <TouchableOpacity style={{ alignItems: 'flex-end', marginVertical: 10 }}>
              <Text style={{ color: themeColors.primary }}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingVertical: 15, backgroundColor: themeColors.button, borderRadius: 25 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: themeColors.text }}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
            <TouchableOpacity style={{ padding: 10, backgroundColor: '#f1f1f1', borderRadius: 25 }}>
              <Image source={require('../assets/images/welcome.png')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
            <Text style={{ color: themeColors.text }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{ color: themeColors.button, fontWeight: 'bold' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
