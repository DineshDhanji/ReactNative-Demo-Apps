import { View, Text } from "react-native";

export default function Alert({ children }) {
  return (
    <View className="h-max p-3 border border-purple-950 bg-purple-200 rounded-lg my-2">
      <Text className="text-start text-wrap text-purple-950 text-base">
        {children}
      </Text>
    </View>
  );
}
