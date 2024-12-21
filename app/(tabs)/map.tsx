import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { color } from "@/assets/data";
import Button from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";

export default function Maps() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);

  const [locationA, setLocationA] = useState(null);
  const [locationB, setLocationB] = useState(null);
  const [selector, setSelector] = useState("A");

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: { backgroundColor: color[800] },
      headerTintColor: color[50],
    });
  }, []);

  useEffect(() => {
    getLocationPermission();
  }, []);

  useEffect(() => {
    getLocation();
    console.log("location", location);
  }, []);

  const getLocation = async () => {
    if (permissionStatus?.granted === false) {
      return;
    }
    await Location.getCurrentPositionAsync({}).then((res) => {
      setLocation({
        latitude: res["coords"].latitude,
        longitude: res["coords"].longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    });
  };
  const getLocationPermission = async () => {
    await Location.requestForegroundPermissionsAsync().then((status) => {
      console.log("status", status);
      setPermissionStatus(status);
    });
  };
  console.log("location", location);
  return (
    <ScrollView className="bg-slate-900 flex-1 px-3">
      <View className="bg-red-200 w-max h-auto aspect-square">
        <MapView
          className="w-full h-full"
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          userLocationPriority={"high"}
          showsMyLocationButton={true}
          userInterfaceStyle={"dark"}
          region={location}
          onPoiClick={(e) => {
            console.log("POI Clicked ", e.nativeEvent);
            if (selector === "A") {
              setLocationA(e.nativeEvent);
              console.log("Location A", locationA);
            } else {
              setLocationB(e.nativeEvent);
            }
          }}
        >
          {locationA && (
            <Marker
              coordinate={locationA.coordinate}
              pinColor={"#FF0000"} // any color
              title={locationA.name}
              description={locationA.name}
            />
          )}
          {locationA && (
            <Marker
              coordinate={locationB.coordinate}
              pinColor={"#FF0000"} // any color
              title={locationB.name}
              description={locationB.name}
            />
          )}

          {locationA !== null && locationB !== null && (
            <MapViewDirections
              origin={locationA.coordinate}
              destination={locationB.coordinate}
              apikey={"AIzaSyA3FzKFHiA7bUcmOaubinG6wqCZt8Dw7Yk"}
              strokeColor={color[950]}
              strokeWidth={4}
            />
          )}
        </MapView>
      </View>

      {permissionStatus?.granted === false ? (
        <View className="border border-slate-500 p-3 rounded-lg my-3">
          <Text className="text-slate-50 text-xl">Permission Denied</Text>
          <Button onPress={getLocationPermission} text={"Get Permission"} />
        </View>
      ) : (
        <View>
          <View className="px-3 py-2 flex-row items-center bg-slate-800 rounded-lg my-3">
            <Ionicons name="location-sharp" size={30} color={"#FF0000"} />
            <Text className="text-lg text-slate-50 ms-3">
              {locationA?.name}
            </Text>
          </View>
          <View className="px-3 py-2 flex-row items-center bg-slate-800 rounded-lg my-3">
            <Ionicons name="location-sharp" size={30} color={"#00FaFF"} />
            <Text className="text-lg text-slate-50 ms-3">
              {locationB?.name}
            </Text>
          </View>

          <View className="mt-3 flex flex-row justify-evenly">
            {selector === "A" ? (
              <>
                <Pressable
                  onPress={() => setSelector("A")}
                  className="w-2/5 border border-slate-100 flex justify-between items-center p-3 rounded-lg my-3"
                >
                  <Text className="text-xl text-slate-50">Location A</Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelector("B")}
                  className="w-2/5 border border-slate-600 flex justify-between items-center p-3 rounded-lg my-3"
                >
                  <Text className="text-xl text-slate-50">Location B</Text>
                </Pressable>
              </>
            ) : (
              <>
                <Pressable
                  onPress={() => setSelector("A")}
                  className="w-2/5 border border-slate-600 flex justify-between items-center p-3 rounded-lg my-3"
                >
                  <Text className="text-xl text-slate-50">Location A</Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelector("B")}
                  className="w-2/5 border border-slate-100 flex justify-between items-center p-3 rounded-lg my-3"
                >
                  <Text className="text-xl text-slate-50">Location B</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      )}
    </ScrollView>
  );
}
