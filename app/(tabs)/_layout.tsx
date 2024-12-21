import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { color } from "@/assets/data";
import { createContext, useContext } from "react";

export const TabsContext = createContext(null);

export default function RootLayout() {
  return (
    <TabsContext.Provider
      value={{
        default:
          "https://i.pinimg.com/736x/f5/38/3f/f5383f7650fe7ee3768c7627be5b25aa.jpg",
        saved: null,
      }}
    >
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == "(home)") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name == "settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name == "camera") {
              iconName = focused ? "camera" : "camera-outline";
            } else if (route.name == "map") {
              iconName = focused ? "map" : "map-outline";
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
        <Tabs.Screen name="map" options={{ title: "Map" }} />
      </Tabs>
    </TabsContext.Provider>
  );
}
