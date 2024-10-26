import { View, Image, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function Card({ drink }) {
  const colorsEspresso = Colors.colors.espresso[200];
  return (
    <View className="flex flex-row bg-latte-200 border-dark_coffee-200 h-max static border rounded-2xl overflow-hidden my-1 p-3">
      <Image
        className="bg-white object-cover h-32 w-32 rounded-3xl me-4"
        source={drink.image}
        resizeMode="cover"
      />
      <View>
        <Text
          className="text-2xl text-dark_coffee-200 font-medium"
          numberOfLines={1}
        >
          {drink.name}
        </Text>
        <Text className="text-lg text-dull-200 font-medium" numberOfLines={1}>
          Feeling lovely today
        </Text>
        <Text className="text-2xl text-dark_coffee-200 font-bold mt-5">
          $ {drink.price}
        </Text>
      </View>
      <Pressable className="bg-dark_coffee-200 hover:bg-dark_coffee-300 size-10 absolute bottom-2 right-2 rounded-full flex justify-center items-center">
        <Ionicons name="add-sharp" size={30} color={colorsEspresso} />
      </Pressable>
    </View>
  );
}
