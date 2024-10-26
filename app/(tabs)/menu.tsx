import { Text, View, ScrollView } from "react-native";
import SearchBar from "@/components/SearchBar";
import drinksData from "@/assets/data/drinksData";

export default function Menu() {
  const categories = [...new Set(drinksData.map((drink) => drink.category))];
  return (
    <ScrollView className="bg-latte-200 h-screen max-h-dvh px-3">
      <View>
        <View className="h-16 flex flex-row justify-between items-center">
          <Text className="text-xl text-start text-dark_coffee-200 my-auto font-[Raleway-Regular] font-bold">
            Menu
          </Text>
        </View>
        <SearchBar />
      </View>
      <Text className="text-xl text-start text-dark_coffee-200 my-3 py-1 font-[Raleway-Regular] font-bold">
        Categories
      </Text>
      <ScrollView
        alwaysBounceHorizontal={true}
        horizontal={true}
        className=" h-max w-full"
      >
        {categories.map((category, index) => (
          <Text
            className="h-max bg-latte-300 border border-dark_coffee-300 text-dark_coffee-200 text-center px-4 py-3 mx-1 my-1 rounded-full"
            key={index}
          >
            {category}
          </Text>
        ))}
      </ScrollView>
    </ScrollView>
  );
}
