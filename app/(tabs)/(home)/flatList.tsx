import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { animeData } from "@/assets/data";

export default function FlatListComponent() {
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View className="flex flex-row items-center my-1 bg-slate-200 border border-slate-400 py-2 px-4 rounded-lg">
          <View className="h-max flex justify-center items-center w-20 me-3">
            <Text className="text-4xl text-slate-700 font-semibold">
              {index < 9 ? `0${index + 1}` : index + 1}
            </Text>
          </View>
          <View>
            <Text className="text-lg">
              <Text className="font-semibold text-slate-800">Title</Text>{" "}
              <Text className="text-slate-950">{item.title}</Text>
            </Text>
            <Text className="text-lg">
              <Text className="font-semibold text-slate-800">Genre</Text>{" "}
              <Text className="text-slate-950">{item.genre}</Text>
            </Text>
            <Text className="text-lg">
              <Text className="font-semibold text-slate-800">Episodes</Text>{" "}
              <Text className="text-slate-950">{item.episodes}</Text>
            </Text>
            <Text className="text-lg">
              <Text className="font-semibold text-slate-800">Status</Text>{" "}
              <Text className="text-slate-950">{item.status}</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View className="my-2">
        <Text className="text-slate-700 text-4xl">FlatList</Text>
      </View>
    );
  };

  const ListFooterComponent = () => {
    return (
      <View className="h-max bg-slate-600 py-3 rounded-md">
        <Text className="text-slate-50 text-lg text-center">
          The end of FlatList.
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1 p-3 bg-slate-300">
      <FlatList
        data={animeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View className="h-1 bg-slate-950" />}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        horizontal={false}
        initialNumToRender={10}
      />
    </View>
  );
}
