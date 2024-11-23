import { View, Text, Image } from "react-native";
import { List } from "react-native-paper";
import { Colors } from "@/constants/Colors";

export default function LeagueItem({ league }) {
  return (
    <View className="flex flex-row items-center justify-between columns-2 border-t-[1px] border-gray-400">
      <List.Item
        className="w-11/12"
        title={league.name}
        titleStyle={{ color: Colors.palette.secondary[950] }}
        descriptionStyle={{ color: Colors.palette.secondary[500] }}
        description={league.country}
        left={(props) => (
          <Image
            className="size-11 object-contain"
            source={{
              uri: league.image,
            }}
          ></Image>
        )}
      />
      <Text className="text-2xl font-bold text-gray-950">
        {league.score}
      </Text>
    </View>
  );
}
