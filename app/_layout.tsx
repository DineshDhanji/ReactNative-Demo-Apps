import { Stack } from "expo-router";
import "../constants/global.css"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
