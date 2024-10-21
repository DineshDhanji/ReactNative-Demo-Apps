import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
// import primaryColor from "../../constants/Colors";

const primaryColor = "#7E463E";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "index") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "location") {
            iconName = focused ? "locate" : "locate-outline";
          } else if (route.name === "orders") {
            iconName = focused ? "clipboard" : "clipboard-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={primaryColor} />;
        },
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          title: "Location",
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
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
