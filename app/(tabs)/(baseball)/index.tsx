import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { Button } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";
import BaseballRecord from "@/components/BaseballRecord";
import Alert from "@/components/Alert";
import { Colors } from "@/constants/Colors";

export default function Soccer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async (force = false) => {
    try {
      const savedData = await AsyncStorage.getItem("baseball_data");

      if (force || savedData === null) {
        console.log("Fetching data from the server...");
        setLoading(true); // Set loading to true while fetching data
        const response = await fetch(
          process.env.EXPO_PUBLIC_BASEBALL_API_ENDPOINT,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v1.baseball.api-sports.io",
              "x-rapidapi-key": process.env.EXPO_PUBLIC_API_KEY,
            },
          }
        );

        const requestData = await response.json();

        if (response.ok && requestData.response) {
          console.log("Data fetched successfully", requestData.response);
          setData(requestData.response);
          // Save the data to AsyncStorage for future use
          await AsyncStorage.setItem(
            "baseball_data",
            JSON.stringify(requestData.response)
          );
          console.log("Data saved to AsyncStorage");
        } else {
          console.error("Error fetching data", requestData);
          setData([]); // Handle no data scenario
        }
      } else {
        console.log("Using cached data from AsyncStorage");
        setData(JSON.parse(savedData));
      }
    } catch (error) {
      console.error("Error accessing AsyncStorage or fetching data", error);
      setData([]); // Handle error scenario
    } finally {
      setLoading(false); // Set loading to false once the process is finished
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("Data has been updated:", data.length);
  }, [data]);

  return (
    <View className="py-3 px-5 flex-1">
      <View className="h-44 w-auto bg-purple-600 justify-center px-4 rounded-lg static">
        <Text className="text-white text-2xl font-semibold text-wrap w-2/3">
          Baseball Matches
        </Text>
        <Text className="text-white text-base mt-4 w-full">
          Stay up-to-date with live scores, match highlights, and in-depth
          coverage of your favorite teams and tournaments from around the world.
        </Text>
      </View>

      <View className="my-3 flex-1">
        <View className="flex flex-row justify-center items-center mb-3">
          <View className="flex-1 flex flex-row items-center">
            <Text className="text-xl font-semibold tracking-wider text-secondary-150">
              Game Records{" "}
              <Text className="text-purple-950 font-semibold text-base">
                ({data.length})
              </Text>
            </Text>
          </View>
          <View>
            <Button
              icon="refresh"
              mode="text"
              textColor={Colors.palette.primary[950]}
              onPress={() => getData(true)}
            >
              Refresh
            </Button>
          </View>
        </View>

        {loading ? (
          <Alert children="Loading data, please wait..." />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={() => (
              <Alert children="Unable to fetch the data from server. Kindly try later." />
            )}
            ListFooterComponent={() => <Alert children="End of the list" />}
            renderItem={({ item }) => <BaseballRecord record={item} />}
          />
        )}
      </View>
    </View>
  );
}
