import { View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function Banner() {
  const colorsDark = Colors.colors.dark_coffee[200];
  return (
    <View className="h-44 w-full border-2 border-dark_coffee-200 rounded-lg mt-3 overflow-hidden">
      <Image
        className="object-cover h-full w-full"
        source={require("../assets/images/banners/banner_1.jpg")}
        // resizeMode="contain"
        // style={{ : "contain" }}
      />
    </View>
  );
}
