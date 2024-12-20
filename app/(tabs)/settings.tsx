import { View, Text, Image } from "react-native";
import { useNavigation } from "expo-router";
import Button from "@/components/Button";
import { useEffect, useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings() {
  const navigation = useNavigation();
  const defaultPhoto = useRef(
    "https://i.pinimg.com/736x/f5/38/3f/f5383f7650fe7ee3768c7627be5b25aa.jpg"
  );
  const [photo, setPhoto] = useState(defaultPhoto.current);
  useEffect(() => {
    getPhotoFromLocalStorage();
  });

  const getPhotoFromLocalStorage = async () => {
    const photo = await AsyncStorage.getItem("photo");
    const JSONPhoto = JSON.parse(photo);
    if (JSONPhoto !== null) {
      setPhoto(JSONPhoto?.uri);
    }
  };
  const removePhoto = async () => {
    const key = await AsyncStorage.getItem("photo");
    if (key !== null) {
      setPhoto(defaultPhoto.current);
      await AsyncStorage.removeItem("photo");
    }
  };
  const goToCamera = () => {
    navigation.navigate("camera");
  };

  return (
    <View className="flex justify-center bg-slate-800 flex-1">
      <View className="flex justify-center items-center">
        <View className="p-3 border border-slate-50 rounded-full">
          <Image
            source={{
              uri: photo,
            }}
            resizeMode="contain"
            className="size-72 rounded-full"
          />
        </View>
        <Button onPress={goToCamera} text={"Update Profile"} />
        <Button onPress={removePhoto} text={"Go back to default"} />
      </View>
      {/* <Text className="text-slate-950 text-3xl">Settings</Text> */}
    </View>
  );
}
