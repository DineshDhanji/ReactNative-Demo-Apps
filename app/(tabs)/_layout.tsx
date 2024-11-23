import { Tabs } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

import Header from "@/components/Header";

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "index") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "(soccer)") {
            iconName = focused ? "football" : "football-outline";
          } else if (route.name === "(baseball)") {
            iconName = focused ? "baseball" : "baseball-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 13,
        },
        tabBarActiveTintColor: Colors.palette.primary[500],
        tabBarInactiveTintColor: Colors.palette.secondary[400],
        tabBarActiveBackgroundColor:Colors.palette.primary[100],
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        animation: "shift",
        cardStyle: { backgroundColor: "#000000" },

        // Header
        headerShown: true,
        header: ({ navigation, route, options }) => {
          return <Header />;
        },
      })}
    >
      <Tabs.Screen
        name="(baseball)"
        options={{
          title: "Baseball Screen",
          tabBarLabel: "Baseball",
          tabBarAccessibilityLabel: "Baseball Tab",
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarAccessibilityLabel: "Home Tab",
        }}
      />

      <Tabs.Screen
        name="(soccer)"
        options={{
          title: "Soccer Screen",
          tabBarLabel: "Soccer",
          tabBarAccessibilityLabel: "Soccer Tab",
        }}
      />
    </Tabs>
  );
}
