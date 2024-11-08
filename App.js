import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import SignUpScreen from './screen/SignUpScreen';
import WelcomeScreen from './screen/WelcomeScreen';
import TambahBarang from './screen/barang/TambahBarang';
import HapusBarang from './screen/barang/HapusBarang';
import EditBarang from './screen/barang/EditBarang';
import LihatBarang from './screen/barang/LihatBarang';

const Stack = createNativeStackNavigator();

export default function App() {
  // State untuk menyimpan item yang dipilih untuk dihapus atau diedit
  const [barang, setBarang] = useState([]); // Gunakan state untuk menyimpan data barang
  const [selectedItem, setSelectedItem] = useState(null);

  // Fungsi untuk menangani aksi setelah barang ditambahkan
  const handleAdd = (name) => {
    const newItem = { id: Date.now().toString(), name };
    setBarang(prevBarang => [...prevBarang, newItem]);
  };

  // Fungsi untuk menangani aksi setelah barang dihapus
  const handleDelete = (id) => {
    setBarang(prevBarang => prevBarang.filter(item => item.id !== id));
    setSelectedItem(null);  // Reset selectedItem setelah dihapus
  };

  // Fungsi untuk menangani update item
  const handleUpdate = (updatedItem) => {
    setBarang(prevBarang =>
      prevBarang.map(item => (item.id === updatedItem.id ? updatedItem : item))
    );
    setSelectedItem(updatedItem);  // Update selectedItem
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} barang={barang} setBarang={setBarang} />}
        </Stack.Screen>

        <Stack.Screen name="TambahBarang">
          {props => <TambahBarang {...props} onAdd={handleAdd} />}
        </Stack.Screen>

        <Stack.Screen name="HapusBarang">
          {props => (
            <HapusBarang
              {...props}
              item={selectedItem}
              onDelete={handleDelete}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="EditBarang">
          {props => (
            <EditBarang
              {...props}
              item={selectedItem}
              onSave={handleUpdate}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="LihatBarang">
          {props => (
            <LihatBarang
              {...props}
              setSelectedItem={setSelectedItem}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
