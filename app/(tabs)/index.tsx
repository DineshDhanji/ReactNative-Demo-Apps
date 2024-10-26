import { View, Text, ScrollView } from "react-native";
import Greet from "@/components/Greet";
import SearchBar from "@/components/SearchBar";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import LongCard from "@/components/LongCard";

import drinksData from "@/assets/data/drinksData";

export default function Index() {
  const drinks = drinksData;

  return (
    <ScrollView className="bg-latte-200 h-screen max-h-dvh px-3">
      <Greet />
      <SearchBar />
      <Banner />
      <Text className="text-xl text-start text-dark_coffee-200 my-3 py-1 font-[Raleway-Regular] font-bold">
        Daily Specials
      </Text>
      <View className="h-max">
        <ScrollView
          alwaysBounceHorizontal={true}
          horizontal={true}
          className=" h-max w-full"
        >
          {drinks.map((drink, index) => (
            <Card key={drink.id} drink={drink} />
          ))}
        </ScrollView>
      </View>
      <Text className="text-xl text-start text-dark_coffee-200 my-3 py-1 font-[Raleway-Regular] font-bold">
        Most Popular Now!
      </Text>
      {drinks.map((drink, index) => (
        <LongCard key={drink.id} drink={drink} />
      ))}
    </ScrollView>
  );
}
