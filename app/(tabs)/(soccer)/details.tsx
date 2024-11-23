import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";
import { useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";

import Header from "@/components/Header";
import Alert from "@/components/Alert";
import { Divider, DataTable } from "react-native-paper";

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();
  let navigation = useNavigation();
  const data = JSON.parse(params.data);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      header: () => <Header back={true} />,
    });

    navigation.addListener("beforeRemove", (e) => {
      navigation.getParent()?.setOptions({
        header: () => <Header />,
      });
    });
  }, [navigation]);

  const getScores = () => {
    let [homeGoals, awayGoals] = ["purple-700", "purple-700"];

    if (data.goals.home > data.goals.away) {
      awayGoals = "gray-300";
    } else if (data.goals.home < data.goals.away) {
      homeGoals = "gray-300";
    }

    const a = `text-5xl font-semibold text-${homeGoals}`;
    const b = `text-5xl font-semibold text-${awayGoals}`;

    return (
      <>
        <Text className={a}>{data.goals.home}</Text>
        <Text className="text-5xl font-semibold text-gray-600 mx-3">:</Text>
        <Text className={b}>{data.goals.away}</Text>
      </>
    );
  };
  const getWinner = () => {
    let [result, winnerLogo] = ["", undefined];

    if (data.goals.home === data.goals.away) {
      result = "Match Draw";
    } else if (data.goals.home > data.goals.away) {
      result = `${data.teams.home.name} Won`;
      winnerLogo = data.teams.home.logo;
    } else {
      result = `${data.teams.away.name} Won`;
      winnerLogo = data.teams.away.logo;
    }
    return (
      <View className="flex-1 w-full">
        <View className="flex flex-row justify-center items-center">
          {winnerLogo && (
            <Image
              resizeMode="contain"
              className="size-7 object-contain mx-3"
              source={{ uri: winnerLogo }}
            ></Image>
          )}
          <Text className="text-base font-semibold text-purple-950">
            {result}
          </Text>
        </View>
      </View>
    );
  };
  const getTimestamp = () => {
    return new Date(data.fixture.timestamp * 1000).toLocaleString();
  };
  return (
    <ScrollView className="flex-1">
      <View
        className="bg-white rounded-lg mx-3 mt-3"
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          shadowColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <View className="h-max flex flex-row mt-4">
          <View className="h-max w-2/6 flex justify-center items-center ">
            <Image
              resizeMode="contain"
              className="size-24 object-contain"
              source={{ uri: data.teams.home.logo }}
            ></Image>
            <Text className="font-bold text-base mt-2">
              {data.teams.home.name}
            </Text>
          </View>

          <View className="flex-1 h-auto">
            <View className="flex-1 justify-center items-center">
              <View className="flex flex-row">{getScores()}</View>
              <Text
                className="text-sm text-center text-gray-600"
                numberOfLines={2}
              >
                {getTimestamp()}
              </Text>
            </View>
          </View>

          <View className="h-max w-2/6 flex justify-center items-center">
            <Image
              resizeMode="contain"
              className="size-24 object-contain"
              source={{ uri: data.teams.away.logo }}
            ></Image>
            <Text className="font-bold text-base mt-2">
              {data.teams.away.name}
            </Text>
          </View>
        </View>
        <View className="mx-3 my-1">
          <Alert>{getWinner()}</Alert>
        </View>
      </View>

      <Divider
        // horizontalInset={true}
        bold={true}
        style={{
          marginVertical: 20,
          height: 1,
          // backgroundColor: Colors.palette.primary[950],
        }}
      />

      <View className="bg-white rounded-lg px-3">
        <Text className="text-xl font-semibold tracking-wider text-secondary-150 mt-3 mb-3 px-1">
          League Details
        </Text>
        <View className="flex justify-center items-center mt-3 mb-5">
          <Image
            className="size-28 object-contain"
            resizeMode="contain"
            source={{ uri: data.league.logo }}
          ></Image>
        </View>
        <DataTable>
          <DataTable.Row>
            <DataTable.Title
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              Name
            </DataTable.Title>
            <DataTable.Cell
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              {data.league.name}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Title
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              Country
            </DataTable.Title>
            <DataTable.Cell
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              {data.league.country}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Title
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              Season
            </DataTable.Title>
            <DataTable.Cell
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              {data.league.season}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Title
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              Round
            </DataTable.Title>
            <DataTable.Cell
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              {data.league.round}
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
      <View className="bg-white rounded-lg px-3 my-3">
        <Text className="text-xl font-semibold tracking-wider text-secondary-150 mt-3 mb-3 px-1">
          Venue
        </Text>
        <DataTable>
          <DataTable.Row>
            <DataTable.Title
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              Name
            </DataTable.Title>
            <DataTable.Cell
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              {data.fixture.venue.name}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Title
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              Country
            </DataTable.Title>
            <DataTable.Cell
              textStyle={{ color: Colors.palette.secondary[950] }}
            >
              {data.fixture.venue.city}
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </ScrollView>
  );
}
