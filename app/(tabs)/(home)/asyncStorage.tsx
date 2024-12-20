import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Button from "@/components/Button";
import { color } from "@/assets/data";

export default function AsyncStorageComponent() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  const [savedData, setSavedData] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("data");
      if (jsonValue !== null) {
        const data = JSON.parse(jsonValue);
        setSavedData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setData = async () => {
    try {
      await AsyncStorage.setItem("data", JSON.stringify(inputData));
    } catch (e) {
      console.log(e);
    } finally {
      setSavedData(inputData);
      setInputData({ firstName: "", lastName: "" });
    }
  };

  const removeData = async () => {
    const key = await AsyncStorage.getItem("data");
    if (key !== null) {
      await AsyncStorage.removeItem("data");
      setSavedData({ firstName: "", lastName: "" });
    }
  };

  async function saveToStorage() {
    if (inputData.firstName.trim() === "" || inputData.lastName.trim() === "") {
      alert("Kindly fill all the fields. (╬▔皿▔)╯");
      return;
    } else {
      setData();
    }
  }

  return (
    <View className="flex-1 bg-slate-900">
      <View className="bg-slate-800 border border-slate-100 rounded-lg p-4 my-2 mx-3">
        <Text className="text-2xl text-slate-50 mb-2">
          Data from Async Storage
        </Text>
        <View className="flex flex-row items-center">
          <Text className="text-lg text-slate-50 font-semibold me-5">
            First Name
          </Text>
          <Text className="text-lg text-slate-50">
            {savedData.firstName === "" ? "undefined" : savedData.firstName}
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-lg text-slate-50 font-semibold me-5">
            Last Name
          </Text>
          <Text className="text-lg text-slate-50">
            {savedData.lastName === "" ? "undefined" : savedData.lastName}
          </Text>
        </View>
        <Button onPress={removeData} text={"Clear Storage"} />
      </View>
      <View className="bg-slate-800 border border-slate-100 rounded-lg p-4 mt-16 mb-2 mx-3 h-max">
        <Text className="text-2xl text-slate-50 mb-2">Input Details Form</Text>

        <View className="flex flex-row items-center">
          <Text className="text-lg text-slate-50 font-semibold me-5">
            First Name
          </Text>
          <TextInput
            value={inputData.firstName}
            className="text-slate-50 border-b border-slate-50 flex-1 px-2"
            placeholder="Shinchan"
            placeholderTextColor={color[300]}
            onChangeText={(text) =>
              setInputData({ ...inputData, firstName: text })
            }
          />
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-lg text-slate-50 font-semibold me-5">
            Last Name
          </Text>
          <TextInput
            value={inputData.lastName}
            className="text-slate-50 border-b border-slate-50 flex-1 px-2"
            placeholder="Nohara"
            placeholderTextColor={color[300]}
            onChangeText={(text) =>
              setInputData({ ...inputData, lastName: text })
            }
          />
        </View>
        <Button onPress={saveToStorage} text={"Save"} />
      </View>
    </View>
  );
}
