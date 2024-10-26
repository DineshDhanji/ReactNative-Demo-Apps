import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function Greet() {
  const colorsEspresso = Colors.colors.espresso[200];
  return (
    <View className="h-16 flex flex-row justify-between items-center">
      <Text className="text-xl text-start text-dark_coffee-200 my-auto font-[Raleway-Regular] font-bold">
        Good Morning
      </Text>
      <Ionicons name="notifications-circle" size={35} color={colorsEspresso} />
    </View>
  );
}
