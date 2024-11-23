import { View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import { ActivityIndicator } from "react-native-paper";

export default function Loading() {
  return (
    <View className="flex items-center">
      <ActivityIndicator
        animating={true}
        hidesWhenStopped={true}
        size={"large"}
        color={Colors.palette.primary[700]}
      />

      <Text className="mt-4 text-neutral-950 text-base text-center">
        Loading notifications
      </Text>
    </View>
  );
}
