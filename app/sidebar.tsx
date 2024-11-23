import { useState, useEffect } from "react";
import { View, Image, Pressable, BackHandler } from "react-native";
import { useNavigation } from "expo-router";
import { Text, List, Portal, Dialog, Button } from "react-native-paper";

import ProfileDataItem from "@/components/ProfileDataItem";
import { Colors } from "@/constants/Colors";
import { profileData } from "@/constants/data";

import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Notifications() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const handleLogout = () => {
    hideDialog();
    BackHandler.exitApp();
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  return (
    <View className="flex-1">
      <View className="h-max justify-center items-center py-5 mt-5">
        <View className="border-4 border-purple-700 size-48 justify-center items-center rounded-full">
          <Image
            resizeMode="contain"
            source={{ uri: process.env.EXPO_PUBLIC_PROFILE_PICTURE }}
            className="size-44 object-contain rounded-full"
          ></Image>
        </View>
        <View className="mt-3">
          <Text variant="bodyLarge">{profileData.name}</Text>
        </View>
      </View>
      <View className="mx-3">
        <List.Section>
          <List.Subheader>Your profile details</List.Subheader>
          <Pressable className="px-2 hover:bg-neutral-300 active:bg-neutral-300">
            <List.Item
              title={() => (
                <ProfileDataItem
                  title={"Name"}
                  text={profileData?.name}
                  editable={true}
                />
              )}
              left={() => (
                <View className="flex justify-center">
                  <Feather name="user" size={24} color="black" />
                </View>
              )}
            />
          </Pressable>

          <Pressable className="px-2 hover:bg-neutral-300 active:bg-neutral-300">
            <List.Item
              title={() => (
                <ProfileDataItem
                  title={"Status"}
                  text={profileData?.username}
                  editable={true}
                />
              )}
              left={() => (
                <View className="flex justify-center">
                  <Feather name="at-sign" size={24} color="black" />
                </View>
              )}
            />
          </Pressable>

          <Pressable
            className="px-2 hover:bg-neutral-300 active:bg-neutral-300"
            onPress={showDialog}
          >
            <List.Item
              title={() => <ProfileDataItem text={"Logout"} />}
              left={() => (
                <View className="flex justify-center">
                  <Ionicons name="log-out-outline" size={30} color="black" />
                </View>
              )}
            />
          </Pressable>
        </List.Section>
      </View>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Logout</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Are you sure you want to log out?</Text>
            <Text variant="bodyMedium" style={{ marginTop: 8 }}>
              Logging out will sign you out of the app, and you'll need to log
              in again to access your account.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={handleLogout}>Logout</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
