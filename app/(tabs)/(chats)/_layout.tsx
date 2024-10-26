import React from "react";
import { View, Text, Pressable } from "react-native";
import { Stack, router } from "expo-router";

import { Menu } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Chats",
          headerTitle: "",
          headerLeft: () => {
            return (
              <Text className="ms-1 text-2xl font-bold text-primary-main">
                WhatsApp
              </Text>
            );
          },
          headerRight: () => {
            return (
              <View className="flex flex-row w-24 bg-white justify-end ">
                <Pressable className="size-9 rounded-full flex justify-center items-center   active:bg-secondary-main hover:bg-secondary-main">
                  <Ionicons name="camera-outline" size={27} />
                </Pressable>

                <Menu
                  visible={menuVisible}
                  onDismiss={closeMenu}
                  anchor={
                    <Pressable
                      onPress={openMenu}
                      className="size-9 rounded-full flex justify-center items-center active:bg-secondary-main hover:bg-secondary-main ms-3"
                    >
                      <Ionicons name="ellipsis-vertical-outline" size={27} />
                    </Pressable>
                  }
                  anchorPosition={"bottom"}
                >
                  <Menu.Item onPress={() => {}} title="New group" />
                  <Menu.Item onPress={() => {}} title="New broadcast" />
                  <Menu.Item onPress={() => {}} title="Linked devices" />
                  <Menu.Item onPress={() => {}} title="Starred messages" />
                  <Menu.Item
                    onPress={() => {
                      router.navigate("settings");
                      closeMenu();
                    }}
                    title="Settings"
                  />
                </Menu>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
}
