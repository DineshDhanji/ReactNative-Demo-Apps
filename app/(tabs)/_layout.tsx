import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
// import { View, Text } from "react-native";
import Header from "@/components/Header";
import { BackHandler } from "react-native";

export default function RootLayout() {
  const colors = Colors.colors;
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "index") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "menu") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={colors.dull} />;
        },
        tabBarStyle: {
          backgroundColor: colors.latte,
          borderTopColor: colors.dark_coffee,
        },
        tabBarActiveTintColor: colors.espresso,
        tabBarInactiveTintColor: colors.dull,
        header: () => <Header />,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
