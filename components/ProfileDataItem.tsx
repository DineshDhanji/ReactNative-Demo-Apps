import { View, Text, Pressable } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Colors } from "@/constants/Colors";

export default function ProfileDataItem({
  title = "",
  text = "",
  size = 19,
  editable = false,
}) {
  return (
    <View>
      <View>
        <Text className="text-sm text-neutral-600">{title}</Text>
      </View>
      <View className="flex flex-row">
        <Text className="text-lg text-neutral-950 flex-1" numberOfLines={1}>
          {text}
        </Text>
        {editable && (
          <Pressable className="size-max rounded-full p-2 justify-center items-center flex hover:bg-neutral-200 active:bg-neutral-200">
            <FontAwesome6
              name="pencil"
              size={size}
              color={Colors.palette.primary.main}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}
