import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter, Link } from "expo-router";

export default function Header({
  title = "GamesFusion",
  iconSize = { leftIcon: 30, rightIcon: 27 },
  back = false,
}) {
  const navigation = useRouter();
  const handleGoBack = () => {
    if (navigation.canDismiss()) {
      navigation.dismiss(1);
    }
  };
  const handleGoToNotifications = () => {
    navigation.navigate("/notifications");
  };
  const handleGoToSidebar = () => {
    navigation.navigate("/sidebar");
  };

  return (
    <View className="flex flex-row items-end justify-between pb-2 px-4 h-16">
      {back ? (
        <TouchableOpacity
          className="w-1/12 justify-center items-center"
          onPress={handleGoBack}
          accessible={true}
          accessibilityLabel="Go back"
        >
          <Ionicons
            name="arrow-back"
            size={iconSize.leftIcon}
            color={Colors.palette.secondary[500]}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="w-1/12 justify-center items-center"
          onPress={handleGoToSidebar}
        >
          <Ionicons
            name="menu-sharp"
            size={iconSize.leftIcon}
            color={Colors.palette.secondary[500]}
          />
        </TouchableOpacity>
      )}

      <Text className="text-2xl font-bold text-center w-9/12">{title}</Text>

      <TouchableOpacity
        className="w-1/12 justify-center items-center"
        onPress={handleGoToNotifications}
      >
        <Ionicons
          name="notifications-outline"
          size={iconSize.rightIcon}
          color={Colors.palette.secondary[400]}
        />
      </TouchableOpacity>
    </View>
  );
}
