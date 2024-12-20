import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { color } from "@/assets/data";

export default function Index() {
  const pages = [
    "flatList",
    "imageView",
    "passObject",
    "countryAPI",
    "asyncStorage",
    "uselessView",
  ];
  const navigation = useNavigation();

  const header = () => (
    <View className="flex flex-row justify-center items-center bg-slate-800 h-20">
      <Image
        className="size-12"
        source={require("@/assets/images/logo.png")}
        resizeMode="contain"
      />
      <Text className="text-3xl text-slate-50">Comb</Text>
    </View>
  );
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: header,
    });
  }, [navigation]);

  const renderItem = ({ item }) => {
    return item === "passObject" ? (
      <Link
        href={{
          pathname: `/${item}`,
          params: {
            name: "Shinchan",
            age: 7,
            product: JSON.stringify({
              name: "Nightmare I & II",
              type: "toy",
              price: 13.51,
              currency: "dollar",
            }),
          },
        }}
        asChild
      >
        <TouchableOpacity className="bg-slate-400 border border-slate-900 py-3 rounded-md my-1 px-3">
          <Text className="text-slate-950 text-lg">{item}</Text>
        </TouchableOpacity>
      </Link>
    ) : (
      <Link href={`/${item}`} asChild>
        <TouchableOpacity className="bg-slate-400 border border-slate-900 py-3 rounded-md my-1 px-3">
          <Text className="text-slate-950 text-lg">{item}</Text>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View className="flex-1 bg-slate-300 p-4">
      <Text className="text-slate-950 text-5xl mb-1 mt-2">
        Welcome to the Demo App
      </Text>
      <Text className="text-slate-950 text-lg mb-3">
        You can navigate to these routes:
      </Text>
      <FlatList
        data={pages}
        renderItem={renderItem}
        // keyExtractor={(item, index) => index}
      />
    </View>
  );
}
