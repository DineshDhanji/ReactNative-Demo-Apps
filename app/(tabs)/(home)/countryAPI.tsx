import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import { color, countryData } from "@/assets/data";

export default function CountryAPIComponent() {
  const [data, setData] = useState(countryData); // All country data
  const [filterData, setFilterData] = useState(countryData); // Filtered country data
  const [query, setQuery] = useState(""); // Search query

  useEffect(() => {
    searchQuery(query); // Trigger search when query changes
  }, [query]);

  function searchQuery(query) {
    if (query.trim() === "" || query.trim() === " ") {
      setFilterData(data); // Show all data if query is empty
    } else {
      const filtered = data.filter((item) =>
        item.name.common.toLowerCase().includes(query.toLowerCase())
      );
      setFilterData(filtered); // Update filtered data based on search
    }
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View className="flex flex-row items-center my-1 bg-slate-200 border border-slate-400 py-2 px-4 rounded-lg">
          <View className="h-max flex justify-center items-center w-20 me-3">
            <Image
              className="w-16 h-16 rounded-full"
              resizeMode="contain"
              style={{ width: 50, height: 50 }}
              source={{ uri: item.flags.png }}
            />
          </View>
          <View>
            <Text className="text-lg">
              <Text className="font-semibold text-slate-800">
                {item.name.common}
              </Text>{" "}
            </Text>
            <Text className="text-sm">
              <Text className="font-semibold text-slate-800">Official</Text>{" "}
              <Text className="text-slate-950" numberOfLines={1}>
                {item.name.official}
              </Text>
            </Text>
            <Text className="text-sm">
              <Text className="font-semibold text-slate-800">Population</Text>{" "}
              <Text className="text-slate-950">{item.population}</Text>
            </Text>
            <Text className="text-sm">
              <Text className="font-semibold text-slate-800">Independent</Text>{" "}
              <Text className="text-slate-950">
                {item.independent === true ? "Yes" : "No"}
              </Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View className="my-2">
        <Text className="text-slate-50 text-4xl">Country Data</Text>
        <Text className="text-slate-50 text-sm">
          <Text className="font-semibold me-4">Total Entries:</Text>
          <Text>{filterData.length}</Text>
        </Text>
      </View>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View className="h-max bg-slate-600 py-3 rounded-md mt-1 mb-2">
        <Text className="text-slate-50 text-lg text-center">
          No data found.
        </Text>
      </View>
    );
  };

  const ListFooterComponent = () => {
    return (
      <View className="h-max bg-slate-600 py-3 rounded-md mt-1 mb-2">
        <Text className="text-slate-50 text-lg text-center">
          The end of FlatList.
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-slate-900">
      <TextInput
        className="border border-slate-50 mx-4 mt-4 mb-2 px-4 rounded-full text-slate-50"
        onChangeText={(text) => setQuery(text)} // Update query state
        placeholder="Search country"
        placeholderTextColor={color[200]}
        value={query}
      />
      <View className="px-5">
        <FlatList
          data={filterData} // Display filtered data
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListEmptyComponent={ListEmptyComponent}
          ListFooterComponent={ListFooterComponent}
          initialNumToRender={25}
        />
      </View>
    </View>
  );
}
