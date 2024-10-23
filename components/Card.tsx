import { View, Image, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function Card() {
  const colorsEspresso = Colors.colors.espresso;
  return (
    <View className="flex items-center bg-latte  border-dark_coffee h-max static border rounded-2xl  overflow-hidden mx-1 p-3">
      <Image
        className="object-cover h-32 w-32 rounded-3xl"
        source={require("../assets/images/menu/coffee_1.jpg")}
        resizeMode="cover"
      />
      <View className="mx-1 mt-3">
        <Text className="text-lg text-dark_coffee font-medium">
          Roasted Coffee
        </Text>
        <Text className="text-lg text-dark_coffee font-bold mt-5">$ 250</Text>
        <Pressable
          // onBlur={() => console.log("Focused")}
          className="bg-dark_coffee size-10 absolute bottom-0 right-0 rounded-full flex justify-center items-center"
        >
          <Ionicons name="add-sharp" size={30} color={colorsEspresso} />
        </Pressable>
      </View>
    </View>
  );
}
