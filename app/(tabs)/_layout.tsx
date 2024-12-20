import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { color } from "@/assets/data";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name == "(home)") {
            iconName = focused ? "home" : "home-outline";
          }
          else if (route.name == "settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          else if (route.name == "camera") {
            iconName = focused ? "camera" : "camera-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: color[900],
        tabBarInactiveTintColor: color[400],
        tabBarActiveBackgroundColor: color[200],
        tabBarInactiveBackgroundColor: color[100],
        tabBarHideOnKeyboard: true,

        headerShown: false,
      })}
    >
      <Tabs.Screen name="(home)" options={{ title: "Home" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      <Tabs.Screen name="camera" options={{ title: "Camera" }} />
    </Tabs>
  );
}
