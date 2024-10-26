import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { Avatar, Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function Settings() {
  return (
    <View className="bg-white h-full">
      <View className="h-24 flex flex-row items-center justify-evenly bg-white">
        <View className="flex justify-center items-center size-20">
          <Avatar.Image
            size={65}
            source={{
              uri: "https://i.pinimg.com/564x/da/1d/b1/da1db1452129ce8557f08c8983403752.jpg",
            }}
          />
        </View>
        <View className="ps-3 w-3/6">
          <Text className="text-black text-2xl font-normal">Naomi</Text>
          <Text className="text-gray text-lg">Your Status</Text>
        </View>
        <View className="flex justify-center items-end p-3  size-24">
          <Button
            // buttonColor="white"
            icon={() => (
              <Ionicons
                name="add-circle-outline"
                size={30}
                color={Colors.palette.primary.main}
              />
            )}
            mode="text"
            width="100"
            onPress={() => console.log("Pressed")}
          >Add Status</Button>
        </View>
      </View>
    </View>
  );
}
