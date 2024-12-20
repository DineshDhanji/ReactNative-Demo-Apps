import { Text, View, Image, Pressable} from "react-native";

export default function imageViewComponent() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-900">
      <Pressable onPress={() => alert("Don't touch me you flat earther.")}>
        <Image
          resizeMode="contain"
          width={200}
          height={200}
          source={{
            uri: "https://i.pinimg.com/736x/f5/38/3f/f5383f7650fe7ee3768c7627be5b25aa.jpg",
          }}
        />
      </Pressable>
      <Text className="text-lg text-slate-50">Shinchan</Text>
      <Text className="text-sm text-slate-600 mt-6">Touch Shinchan</Text>
    </View>
  );
}
