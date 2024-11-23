import { Text, View, Image, Pressable } from "react-native";
import { Link } from "expo-router";

export default function SoccerRecord({ record }) {
  return (
    <Link
      push
      href={{
        pathname: "/details",
        params: { data: JSON.stringify(record) },
      }}
      asChild
    >
      <Pressable className="flex flex-row h-24 bg-white rounded-lg border border-gray-400 px-3 pt-2 pb-4 my-2 hover:bg-primary-50 active:bg-primary-50">
        <View className="h-16 w-10/12">
          <View className="h-1/2 flex flex-row justify-between items-center mb-1">
            <View className="flex flex-row items-center">
              <Image
                resizeMode="contain"
                className="size-8 object-contain"
                source={{ uri: record.teams.home.logo }}
              ></Image>
              <Text className="font-semibold text-secondary-150 ms-2">
                {record.teams.home.name}
              </Text>
            </View>
            <Text className="font-bold text-xl text-gray-400 me-2">
              {record.scores.home.total}
            </Text>
          </View>

          <View className=" h-1/2 flex flex-row justify-between items-center mt-1">
            <View className="flex flex-row items-center">
              <Image
                resizeMode="contain"
                className="size-8 object-contain"
                source={{ uri: record.teams.away.logo }}
              ></Image>
              <Text className="font-semibold text-secondary-150 ms-2">
                {record.teams.away.name}
              </Text>
            </View>
            <Text className="font-bold text-xl text-gray-400 me-2">
              {record.scores.away.total}
            </Text>
          </View>
        </View>
        <View className="h-full w-2/12 flex justify-center items-center border-s border-gray-400 ms-1">
          <Image
            resizeMode="contain"
            className="size-12 object-contain"
            source={{ uri: record.league.logo }}
          ></Image>
        </View>
      </Pressable>
    </Link>
  );
}
