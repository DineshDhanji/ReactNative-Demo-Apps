import { View, Text } from "react-native";

export default function Alert({ children }) {
  return (
    <View className="h-max p-3 border border-rose-950 bg-rose-200 rounded-lg my-2">
      <Text className="text-start text-wrap text-rose-950 text-base">
        {children}
      </Text>
    </View>
  );
}
