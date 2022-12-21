import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
  Inter_300Light,
} from "@expo-google-fonts/inter";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import { store } from "./src/store";

import { theme } from "./src/styles/theme";

import RootRoutes from "./src/routes/root.routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_300Light,
  });

  if (!fontsLoaded && !store) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <RootRoutes />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
