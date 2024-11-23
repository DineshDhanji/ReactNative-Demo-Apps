import { View, Text, Image } from "react-native";

export default function LeagueMatchItem({ match }) {
  return (
    <View className="h-max border border-gray-400 rounded-lg px-5 py-4 my-2 bg-white">
      <View className="flex flex-row justify-between columns-2 mb-2">
        <View className="flex flex-row w-10/12">
          <Image
            className="size-7 object-contain me-3"
            source={{
              uri: match.teamAImage,
            }}
          ></Image>
          <Text className="text-base font-semibold">{match.teamAName}</Text>
        </View>

        <Text className="font-bold text-lg w-1/12">{match.teamAScore}</Text>
      </View>
      <View className="flex flex-row justify-between columns-2 mt-2">
        <View className="flex flex-row w-10/12">
          <Image
            className="size-7 object-contain me-3"
            source={{
              uri: match.teamBImage,
            }}
          ></Image>
          <Text className="text-base font-semibold">{match.teamBName}</Text>
        </View>
        <Text className="font-bold text-lg w-1/12">{match.teamBScore}</Text>
      </View>
    </View>
  );
}
