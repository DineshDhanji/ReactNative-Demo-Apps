import { Text, TouchableOpacity } from "react-native";

export default function Button({ onPress, text }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-slate-50 hover:bg-slate-300 active:bg-slate-300 focus:bg-slate-300 h-max mt-4 px-3 py-2 rounded-lg"
    >
      <Text className="text-slate-950 text-center text-lg">{text}</Text>
    </TouchableOpacity>
  );
}
