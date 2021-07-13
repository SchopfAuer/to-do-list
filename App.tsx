import { useFonts } from 'expo-font';
import React from 'react';
import { Home } from './src/screens/Home';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
    <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
    />
    <Home />
    </>
  );
}

