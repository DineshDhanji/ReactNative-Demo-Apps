import { Stack } from "expo-router";
import "../constants/global.css";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Loading fonts
  const [loaded, error] = useFonts({
    "Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf"),
    "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1,
    //  paddingTop: 30
      }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaView>
  );
}
