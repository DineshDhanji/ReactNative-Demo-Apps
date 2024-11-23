import { View, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { Text, Button } from "react-native-paper";
export default function NotFound() {
  const navigation = useNavigation();
  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View className="flex-1 bg-purple-800 justify-center items-center">
      <Text variant="displayLarge" style={styles.display}>
        404
      </Text>
      <Text variant="titleLarge" style={styles.title}>
        Page Not Found (；′⌒`)
      </Text>
      <View className="mt-5">
        <Button
          icon="arrow-left"
          mode="text"
          onPress={handleGoBack}
          textColor="white"
        >
          Go Back
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    color: "white",
  },
  title: {
    color: "white",
  },
});
