import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="Chats"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "index") {
            iconName = focused
              ? "chatbox-ellipses"
              : "chatbox-ellipses-outline";
          } else if (route.name === "updates") {
            iconName = focused ? "disc" : "disc-outline";
          } else if (route.name === "communities") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "calls") {
            iconName = focused ? "call" : "call-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#00AB50",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontWeight: "900",
        },
        headerLeft: () => {
          return <Text style={styles.mainHeaderLeftSide}>WhatsApp</Text>;
        },
        headerRight: () => {
          return (
            <View style={styles.mainHeaderRightSide}>
              <Pressable
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "#F7F5F3" : "white" },
                  styles.headerButton,
                ]}
              >
                <Ionicons name="camera-outline" size={27} />
              </Pressable>
              {/* <Pressable
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "#F7F5F3" : "white" },
                  styles.headerButton,
                ]}
              >
                <Ionicons name="search-outline" size={27} />
              </Pressable> */}
              <Pressable
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "#F7F5F3" : "white" },
                  styles.headerButton,
                ]}
              >
                <Ionicons name="ellipsis-vertical-outline" size={27} />
              </Pressable>
            </View>
          );
        },
        headerTitle: "",
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Chats" }} />
      <Tabs.Screen name="updates" options={{ title: "Updates" }} />
      <Tabs.Screen name="communities" options={{ title: "Communities" }} />
      <Tabs.Screen name="calls" options={{ title: "Calls" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  mainHeaderLeftSide: {
    marginStart: 15,
    fontSize: 22,
    fontWeight: "bold",
    color: "#00AB50",
  },
  mainHeaderRightSide: {
    flex: 1,
    flexDirection: "row",
    width: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
