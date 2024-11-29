import { Tabs } from "expo-router";
import "@/global.css";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="maps"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === "index") {
            iconName = focused
              ? "home"
              : "home-outline";
          } else if (route.name === "maps") {
            iconName = focused ? "map" : "map-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.rose[700],
        tabBarInactiveTintColor: Colors.neutral[700],
        tabBarActiveBackgroundColor: Colors.rose[50],
        tabBarInactiveBackgroundColor: Colors.neutral[50],
        tabBarHideOnKeyboard: true,
        // headerBackground: Colors.rose[50],
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          tabBarLabel: "Map",
          title: "Map",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
