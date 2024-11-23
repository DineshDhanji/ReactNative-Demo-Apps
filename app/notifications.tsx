import { useState, useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import Loading from "@/components/Loading";

export default function Notifications() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });

    // Toggle loading state after 1 second
    const timer = setTimeout(() => {
      setLoading(false); // Change loading to false after 1 second
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 justify-center items-center">
      {loading ? (
        <Loading />
      ) : (
        <View>
          <Text
            variant="bodyLarge"
            style={{ color: Colors.palette.secondary[950] }}
          >
            No notifications found
          </Text>
        </View>
      )}
    </View>
  );
}
