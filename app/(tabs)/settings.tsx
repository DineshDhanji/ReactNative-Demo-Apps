import { View, Text, Image } from "react-native";
import { useNavigation } from "expo-router";
import Button from "@/components/Button";
import { useEffect, useState, useRef, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TabsContext } from "@/app/(tabs)/_layout";

export default function Settings() {
  const navigation = useNavigation();
  const photoURI = useContext(TabsContext);
  const [photo, setPhoto] = useState(photoURI?.default);

  useEffect(() => {
    getPhotoFromContext();
    console.log(photoURI);
  });

  const getPhotoFromContext = async () => {
    if (photoURI?.saved !== null) {
      setPhoto(photoURI?.saved);
    }
  };
  const removePhoto = async () => {
    photoURI.saved = null;
    setPhoto(photoURI.default);
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
    </View>
  );
}
