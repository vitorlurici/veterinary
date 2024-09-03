import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./src/pages/login";
import { globalStyles } from "./src/global/styles";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <View style={globalStyles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}
