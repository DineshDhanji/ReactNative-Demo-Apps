import { View, Text } from "react-native";
import { useState, useRef, useContext } from "react";
import { useNavigation } from "expo-router";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "@/components/Button";
import { TabsContext } from "./_layout";

export default function Settings() {
  const [permission, requestCameraPermission] = useCameraPermissions();
  const [cameraFacing, setCameraFacing] = useState("back");
  const cameraRef = useRef(null);
  const navigation = useNavigation();
  const photoURI = useContext(TabsContext);

  const flipCamera = () => {
    setCameraFacing((oldFacing) => (oldFacing === "back" ? "front" : "back"));
  };
  const capture = async () => {
    console.log("Capture");
    cameraRef.current.takePictureAsync().then((photo) => {
      console.log(photo);
      photoURI.saved = photo.uri;
      navigation.navigate("settings");
    });
  };
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }
  console.log(permission);

  if (permission.granted === false) {
    return (
      <View className="flex justify-center flex-1 bg-slate-800 px-5">
        <Text className="text-slate-50 text-xl">
          Seems like we don't have the camera permission yet. ＞﹏＜
        </Text>
        <Button onPress={requestCameraPermission} text={"Ask for permission"} />
      </View>
    );
  }

  return (
    <View className="flex flex=col justify-between flex-1 bg-slate-800">
      <View className="h-max px-5">
        <Text className="text-slate-50 text-3xl mt-5 mb-5 px-2">
          Poki Camera 🎀
        </Text>
        <CameraView
          ref={cameraRef}
          style={{ width: "100%", height: "auto", aspectRatio: 1 }}
          ratio="1:1"
          facing={cameraFacing}
          animateShutter={true}
          shutterSound={true}
        />
        <Text className="text-center text-slate-50 text-xl mt-3">
          Smile (●'◡'●)
        </Text>
      </View>
      <View className="h-1/5 flex justify-end  p-4">
        <Button
          onPress={flipCamera}
          text={
            cameraFacing === "back" ? "Use Front Camera" : "Use Back Camera"
          }
        />
        <Button onPress={capture} text="Capture" />
      </View>
    </View>
  );
}
