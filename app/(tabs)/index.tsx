import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Text, Button, Icon } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function Index() {
  return (
    <View className="flex-1 p-5 flex justify-between bg-rose-50">
      <View>
        <Text variant="headlineLarge" style={styles.roseLightText}>
          Say Hello to Maps
        </Text>
        <Text variant="bodyLarge" style={styles.roseText} className="mt-3">
          Well this is just a practice app so don't get worked up.
        </Text>
      </View>
      <Link href={"/maps"} asChild>
        <Button
          mode="contained-tonal"
          rippleColor={Colors.rose[500]}
          labelStyle={{ color: Colors.rose[950] }}
          textColor={Colors.rose[950]}
          contentStyle={{
            flexDirection: "row-reverse",
            backgroundColor: Colors.rose[400],
          }}
          icon="arrow-right"
          onPress={() => console.log("Pressed")}
        >
          Go to map
        </Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  roseLightText: {
    color: Colors.rose[900],
  },
  roseText: {
    color: Colors.rose[950],
  },
});
