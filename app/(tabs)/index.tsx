import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import { Modal, Button } from "react-native-paper";

import LeagueItem from "@/components/LeagueItem";
import LeagueMatchItem from "@/components/LeagueMatchItem";
import { Colors } from "@/constants/Colors";
import { soccer_leagues, soccer_last_matches } from "@/constants/data";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";

export default function Index() {
  const [soccerLeagues, setSoccerLeagues] = useState([]);
  const [soccerLeaguesMatches, setSoccerLeaguesMatches] = useState([]);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    setSoccerLeagues(soccer_leagues);
    setSoccerLeaguesMatches(soccer_last_matches);
  }, []);

  const renderSoccerLeagues = ({ item }) => {
    return <LeagueItem league={item} />;
  };
  const renderSoccerLeaguesMatches = ({ item }) => {
    return <LeagueMatchItem match={item} />;
  };

  const listFooterComponent = () => {
    return (
      <View className="w-full flex items-end">
        <Button
          style={{ width: 100 }}
          textColor={Colors.palette.primary[950]}
          mode="text"
          onPress={showModal}
        >
          See More
        </Button>
      </View>
    );
  };

  return (
    <>
      <View className="mt-4">
        <ScrollView>
          <View className="h-44 w-auto bg-purple-700 mx-4 justify-center px-5 rounded-lg static">
            <Text className="text-white text-2xl font-semibold text-wrap w-2/3">
              Unleash Your Passion for Gaming
            </Text>
            <Image
              key="1"
              source={require("@/assets/images/soccer_ball.png")}
              className="z-10 object-contain size-44 absolute right-[-15px] top-[1px] bottom-0 animate-bounce"
            ></Image>
            <Text className="text-white text-base mt-4 w-2/3">
              Explore, Play, and Enjoy the Best Games Anytime, Anywhere
            </Text>
          </View>

          <View className="h-28 mx-4 mt-4">
            <Text className="text-xl font-semibold tracking-wider text-secondary-150 mb-1">
              Games
            </Text>
            <ScrollView horizontal={true} className="mt-1">
              <Pressable className="size-16 me-2 justify-center items-center rounded-full bg-purple-600 active:bg-purple-500 hover:bg-purple-500">
                <FontAwesome6
                  name="volleyball"
                  size={30}
                  color={Colors.palette.secondary[100]}
                />
              </Pressable>
              <Pressable className="size-16 me-2 justify-center items-center rounded-full bg-purple-600 active:bg-purple-500 hover:bg-purple-500">
                <FontAwesome6
                  name="football"
                  size={30}
                  color={Colors.palette.secondary[100]}
                />
              </Pressable>
              <Pressable className="size-16 me-2 justify-center items-center rounded-full bg-purple-600 active:bg-purple-500 hover:bg-purple-500">
                <FontAwesome6
                  name="basketball"
                  size={30}
                  color={Colors.palette.secondary[100]}
                />
              </Pressable>
              <Pressable className="size-16 me-2 justify-center items-center rounded-full bg-purple-600 active:bg-purple-500 hover:bg-purple-500">
                <FontAwesome6
                  name="baseball"
                  size={30}
                  color={Colors.palette.secondary[100]}
                />
              </Pressable>
              <Pressable className="size-16 me-2 justify-center items-center rounded-full bg-purple-600 active:bg-purple-500 hover:bg-purple-500">
                <MaterialIcons
                  name="sports-cricket"
                  size={30}
                  color={Colors.palette.secondary[100]}
                />
              </Pressable>
              <Pressable className="size-16 me-2 justify-center items-center rounded-full bg-purple-600 active:bg-purple-500 hover:bg-purple-500">
                <FontAwesome5
                  name="table-tennis"
                  size={30}
                  color={Colors.palette.secondary[100]}
                />
              </Pressable>
            </ScrollView>
          </View>

          <View className="h-max my-3 px-5 py-3 bg-white rounded-lg pb-3">
            <Text className="text-xl font-semibold tracking-wider text-secondary-150 mt-3 mb-3 px-1">
              Soccer Leagues
            </Text>
            <View className="h-max">
              {soccerLeagues.map((league) => (
                <LeagueItem key={league.id} league={league} />
              ))}
              {listFooterComponent()}
            </View>
          </View>

          <View className="h-max px-4">
            <Text className="text-xl font-semibold tracking-wider text-secondary-150 mt-3 mb-1">
              Last Matches
            </Text>
            <View className="h-max">
              {soccerLeaguesMatches.map((match) => (
                <LeagueMatchItem key={match.id} match={match} />
              ))}
              {listFooterComponent()}
            </View>
          </View>
        </ScrollView>
      </View>

      <Modal visible={visible} onDismiss={hideModal} dismissable={true}>
        <View className="bg-white h-40 mx-5 py-5 px-2 rounded-lg text-center relative">
          <View className="h-3/4 justify-center items-center">
            <Text className=" text-lg text-secondary-150">
              Out of scope of this assignment
            </Text>
            <Text className="mt-1 text-secondary-150">（*＾-＾*）</Text>
          </View>
          <View className="flex justify-end items-end">
            <View className="w-1/3">
              <Button
                mode="text"
                onPress={hideModal}
                buttonColor={Colors.palette.primary[300]}
                textColor={Colors.palette.primary[950]}
              >
                <Text> Go Back</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
