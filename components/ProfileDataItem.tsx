import { View, Text, Pressable } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Colors } from "@/constants/Colors";

export default function ProfileDataItem({
  title = undefined,
  text = "",
  size = 19,
}) {
  return (
    <View>
      {title && (
        <View>
          <Text className="text-sm text-neutral-600">{title}</Text>
        </View>
      )}
      <View className="flex flex-row">
        <Text className="text-lg text-neutral-950 flex-1" numberOfLines={1}>
          {text}
        </Text>
      </View>
    </View>
  );
}
