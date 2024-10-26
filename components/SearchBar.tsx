import { TextInput, KeyboardAvoidingView, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function SearchBar() {
  const colorsDark = Colors.colors.dark_coffee[200];
  return (
    <KeyboardAvoidingView
      className="h-14 border rounded-full flex flex-row items-center px-3"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Ionicons
        className="size-10 p-1"
        name="search-outline"
        size={24}
        color={colorsDark}
      />
      <TextInput
        className="w-full h-full outline-none"
        placeholder="Search your coffee ☕"
      />
    </KeyboardAvoidingView>
  );
}
