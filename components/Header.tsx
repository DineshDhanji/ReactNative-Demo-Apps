import { View, Text } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Header() {
  return (
    <View className="h-16 bg-[rbg(0 0 255)] bg-[dull]">
      <Text>Cupful Coffee</Text>
    </View>
  );
}
