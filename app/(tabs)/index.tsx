import { View, Text, ScrollView } from "react-native";
import Greet from "@/components/Greet";
import SearchBar from "@/components/SearchBar";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
export default function Index() {
  return (
    <View className="bg-latte h-screen max-h-dvh px-3">
      <Greet />
      <SearchBar />
      <Banner />
      <Text className="text-xl text-start text-dark_coffee my-3 py-1 font-[Raleway-Regular] font-bold">
        Daily Specials
      </Text>
      <View className="h-max">
        <ScrollView
          alwaysBounceHorizontal={true}
          horizontal={true}
          className=" h-max w-full"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </View>
  );
}
