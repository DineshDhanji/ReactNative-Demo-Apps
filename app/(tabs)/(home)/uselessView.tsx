import { Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { Menu, Divider, FAB } from "react-native-paper";
import { color } from "@/assets/data";
import Button from "@/components/Button";

export default function imageViewComponent() {
  const [visible, setVisible] = useState(false);

  return (
    <View className="flex-1 bg-slate-900 p-2">
      <View className="border border-slate-50 rounded-lg p-4 mt-1 mb-2">
        <Text className="text-slate-50 text-3xl">Popup Menu</Text>
        <Text className="text-slate-200 text-lg">
          Not gonna implement this any further.
        </Text>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <Button onPress={() => setVisible(true)} text={"Show menu"} />
          }
        >
          <Menu.Item onPress={() => {}} title="Useless Item 1" />
          <Menu.Item onPress={() => {}} title="Useless Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Useless Item 3" />
        </Menu>
      </View>
      <View className="border border-slate-50 rounded-lg p-4 mt-1 mb-2">
        <Text className="text-slate-50 text-3xl">Try FAB</Text>
        <Text className="text-slate-200 text-lg">Try both of them</Text>
      </View>

      <FAB
        icon={() => <Text className="text-4xl">🍌</Text>}
        size="large"
        className="bg-slate-300 absolute right-0 bottom-16 m-4"
        onPress={() =>
          alert("Oh, you touch my TA LA LA\nMmm, my ding ding dong")
        }
        rippleColor={color[500]}
      />
      <FAB
        icon={() => <Text className="text-5xl">🐝</Text>}
        size="large"
        className="bg-slate-300 absolute right-0 bottom-0 m-4"
        onPress={() => alert("Naughty naughty, you teasing me")}
        rippleColor={color[500]}
      />
    </View>
  );
}
