import { useContext } from "react";
import { View, Image, Pressable } from "react-native";

import { ProfileContext } from "./_layout";
import ProfileDataItem from "@/components/ProfileDataItem";

import { List } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Profile() {
  const profileData = useContext(ProfileContext);
  return (
    <View className="flex-1">
      <View className="flex justify-center items-center mt-10 mb-6">
        <View className="relative">
          <Image
            className="w-44 h-44 object-cover rounded-full"
            source={{ uri: profileData?.profileImage }}
          />

          <Pressable className="absolute bottom-[-10px] right-0 bg-primary-main w-12 h-12 rounded-full justify-center items-center hover:bg-primary-dark active:bg-primary-dark">
            <Feather name="camera" size={20} color="white" />
          </Pressable>
        </View>
      </View>

      <View className="px-3">
        <List.Section>
          <List.Subheader>Your Profile Details</List.Subheader>
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
          <List.Item
            title={() => (
              <ProfileDataItem
                title={"Status"}
                text={profileData?.status}
                editable={true}
              />
            )}
            left={() => (
              <View className="flex justify-center">
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="black"
                />
              </View>
            )}
          />
          <List.Item
            title={() => (
              <ProfileDataItem title={"Phone"} text={profileData?.phone} />
            )}
            left={() => (
              <View className="flex justify-center">
                <Feather name="phone" size={24} color="black" />
              </View>
            )}
          />
        </List.Section>
        {/* <Text
          className="text-2xl font-medium text-neutral-950 my-2"
          numberOfLines={1}
        >
          {profileData?.name}
        </Text>
        <Text
          className="text-base font-normal text-neutral-600 my-1"
          numberOfLines={2}
        >
          {profileData?.status}
        </Text> */}
      </View>
    </View>
  );
}
