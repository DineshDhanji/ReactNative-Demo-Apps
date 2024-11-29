import { View, Text, Image, Pressable } from "react-native";

export default function PlaceItem({ place, index, onPressHandle }) {
  return (
    <Pressable
      // onPress={onPressHandle(place)}
      onPress={() => onPressHandle(place)}
      className=" hover:bg-rose-100 active:bg-rose-100 bg-rose-50flex flex-row justify-center items-center my-1"
    >
      <View className="m-3">
        <Image
          className="size-8"
          source={{ uri: place.icon }}
          resizeMode="contain"
        ></Image>
      </View>
      <View className="flex-1 ms-2 py-1">
        <Text
          className="text-neutral-950 text-base font-semibold text-wrap mb-1"
          numberOfLines={1}
        >
          {place.name}
        </Text>
        <Text className="text-neutral-950 text-sm text-wrap" numberOfLines={2}>
          {place.formatted_address}
        </Text>
      </View>
    </Pressable>
  );
}
