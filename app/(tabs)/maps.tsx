import { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { Button, Dialog, Portal, Text, IconButton } from "react-native-paper";
import MapView, { PROVIDER_GOOGLE, Marker, Region } from "react-native-maps";
import SearchBar from "@/components/SearchBar";
import { Colors } from "@/constants/Colors";

export default function Maps() {
  // Location permissions and state
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  // const [selectedPlace, setSelectedPlace] = useState({
  //   coordinate: { latitude: 24.84664323407609, longitude: 67.00291156768799 },
  //   name: "TDF Magnifi Science Centre",
  //   placeId: "ChIJFz1QFvc_sz4RCn8K3zfYXv4",
  //   position: { x: 407, y: 1256 },
  //   target: 3320,
  // });
  const [selectedPlace, setSelectedPlace] = useState();
  // Location region state
  const [region, setRegion] = useState<Region | null>(null);

  // Alert Dialog state
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        showDialog();
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation((oldLocation) => location);
      setRegion((oldRegion) => ({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }));
    }

    getCurrentLocation();
  }, []);

  const handleSelectedPlace = (place) => {
    setSelectedPlace(place);
  };

  console.log("location ", location);
  console.log("Error ", errorMsg);
  console.log("Region ", region);

  useEffect(() => {
    console.log("Selected Place: ", selectedPlace);
  }, [selectedPlace]);
  return (
    <>
      <View
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        <SearchBar region={region} onSelectPlace={handleSelectedPlace} />
        {region && (
          <MapView
            style={styles.map}
            region={region || undefined} // Ensure it passes 'undefined' if region is null
            showsUserLocation={true}
            userLocationPriority={"high"}
            followsUserLocation={true}
            showsCompass={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
            rotateEnabled={true}
            onPoiClick={(e) => {
              console.log("POI Clicked ", e.nativeEvent);
            }}
          >
            {selectedPlace && (
              <Marker
                coordinate={{
                  latitude: selectedPlace?.geometry?.location?.lat,
                  longitude: selectedPlace?.geometry?.location?.lng,
                }}
                pinColor={"red"} // any color
                title={selectedPlace.name}
                description={selectedPlace.formatted_address}
              />
            )}
          </MapView>
        )}
      </View>

      <Portal>
        <Dialog
          style={styles.alertContainer}
          dismissable={true}
          dismissableBackButton={true}
          visible={visible}
          onDismiss={hideDialog}
        >
          <Dialog.Title style={styles.alertText}>
            Location Permission Error
          </Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium" style={styles.alertText}>
              {errorMsg}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              buttonColor={Colors.rose[100]}
              rippleColor={Colors.rose[200]}
              labelStyle={styles.alertText}
              onPress={hideDialog}
            >
              Okay
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  alertContainer: {
    backgroundColor: Colors.rose[100],
  },
  alertText: {
    color: Colors.rose[950],
  },
});
