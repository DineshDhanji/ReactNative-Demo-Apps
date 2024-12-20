import { color } from "@/assets/data";
import { Stack } from "expo-router";
import { View, Text, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={color[800]}
        barStyle={"default"}
      />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: color[800] },
          headerTintColor: color[50],
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="flatList" options={{ title: "FlatList Page" }} />
        <Stack.Screen name="imageView" options={{ title: "ImageView Page" }} />
        <Stack.Screen
          name="passObject"
          options={{ title: "PassObject Page" }}
        />
        <Stack.Screen
          name="countryAPI"
          options={{ title: "CountryAPI Page" }}
        />
        <Stack.Screen
          name="asyncStorage"
          options={{ title: "AsyncStorage Page" }}
        />
        <Stack.Screen
          name="uselessView"
          options={{ title: "UselessView Page" }}
        />
      </Stack>
    </>
  );
}
