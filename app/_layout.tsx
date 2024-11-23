import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import "@/global.css";

export default function RootLayout() {
  return (
    <PaperProvider>
      <SafeAreaView className="flex-1">
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="notifications"
            options={{
              title: "Notifications",
            }}
          />
          <Stack.Screen
            name="sidebar"
            options={{
              title: "Profile",
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </SafeAreaView>
    </PaperProvider>
  );
}
