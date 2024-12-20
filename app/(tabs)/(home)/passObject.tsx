import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function passObjectComponent() {
  const local = useLocalSearchParams();
  const product = JSON.parse(local?.product);
  return (
    <View className="flex-1 justify-center items-center bg-slate-900">
      <View className="h-max">
        <View className="flex flex-row">
          <Text className="text-lg text-slate-50 font-semibold me-3">
            Buyer name:
          </Text>
          <Text className="text-lg text-slate-50">{local?.name}</Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-lg text-slate-50 font-semibold me-3">
            Age:
          </Text>
          <Text className="text-lg text-slate-50">{local?.age}</Text>
        </View>
        <View className="mt-3">
          <Text className="text-lg text-slate-50 font-semibold me-3">
            Product Details:
          </Text>
          <View className="flex flex-row">
            <Text className="text-lg text-slate-50 font-semibold me-3">
              Name:
            </Text>
            <Text className="text-lg text-slate-50">{product?.name}</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-lg text-slate-50 font-semibold me-3">
              Type:
            </Text>
            <Text className="text-lg text-slate-50">{product?.type}</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-lg text-slate-50 font-semibold me-3">
              Price:
            </Text>
            <Text className="text-lg text-slate-50">{product?.price}</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-lg text-slate-50 font-semibold me-3">
              Currency:
            </Text>
            <Text className="text-lg text-slate-50">{product?.currency}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
