import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Searchbar, IconButton, ActivityIndicator } from "react-native-paper";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Alert from "@/components/Alert";
import PlaceItem from "@/components/PlaceItem";
import { Colors } from "@/constants/Colors";
import data from "@/temp.js";

export default function SearchBar({ region, onSelectPlace }) {
  // Search bar state
  const searchBarRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cleanSearchBar = () => {
    searchBarRef?.current.clear();
    setSearchQuery("");
  };
  const handleSearchQuery = async (query: string) => {
    setSearchQuery(query);
  };
  const activateSearchBar = () => {
    setIsExpanded(true);
  };

  const deactivateSearchBar = () => {
    searchBarRef?.current.blur();
    cleanSearchBar();
    setIsExpanded(false);
    setPlaces([]);
  };

  const searchPlaces = async () => {
    if (!searchQuery.trim().length) {
      return;
    }

    // Activate loading spinner
    setIsLoading(true);
    setPlaces([]);
    console.log("Search Query: ", searchQuery);

    const googleAPISURL =
      "https://maps.googleapis.com/maps/api/place/textsearch/json";
    const input = searchQuery.trim();
    const radius = 2000;
    const temp_location = `${region?.latitude},${region?.longitude}&radius=${radius}`;
    const finalURL = `${googleAPISURL}?query=${input}&location=${temp_location}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`;

    try {
      const response = await fetch(finalURL);
      let data = await response.json();
      setPlaces(data.results);
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      // Deactivate loading spinner
      setIsLoading(false);
    }
  };

  const handleSelectPlace = (place) => {
    // Call the parent handler to set the selected place
    onSelectPlace(place);
    // Deactivate the search bar after selecting the place
    deactivateSearchBar();
  };
  return (
    <View
      // className="flex-1"
      className="bg-rose-50 top-0 left-0 z-10 w-full absolute"
      style={isExpanded && { height: "100%" }}
    >
      <Searchbar
        ref={searchBarRef}
        style={styles.searchBar}
        inputStyle={styles.searchBarText}
        onFocus={activateSearchBar}
        onEndEditing={searchPlaces}
        cursorColor={Colors.rose[950]}
        numberOfLines={1}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearchQuery}
        mode="bar"
        icon={isExpanded ? "arrow-left" : "magnify"}
        onIconPress={isExpanded ? deactivateSearchBar : undefined}
        right={(props) => (
          <IconButton
            icon={(props) => {
              return (
                <FontAwesome6
                  name="location-arrow"
                  size={props.size}
                  color={props.color}
                />
              );
            }}
            iconColor={Colors.rose[950]}
            size={21}
            disabled={searchQuery.trim().length === 0}
            onPress={searchPlaces}
          />
        )}
      />
      {isExpanded && (
        <View className="bg-rose-50 px-3 flex-1">
          {searchQuery.trim().length === 0 ? (
            <Alert>
              <Text>
                Enter your place name in search bar, and hit go button.
              </Text>
            </Alert>
          ) : (
            <View className="bg-rose-50">
              {isLoading && (
                <ActivityIndicator
                  animating={isLoading}
                  color={Colors.rose[950]}
                  hidesWhenStopped={true}
                  size={"small"}
                />
              )}
              <View className="">
                <FlatList
                  data={places}
                  renderItem={({ item, index }) => (
                    <Pressable onPress={() => handleSelectPlace(item)}>
                      <PlaceItem
                        place={item}
                        index={index}
                        onPressHandle={handleSelectPlace}
                      />
                    </Pressable>
                  )}
                  keyExtractor={(item) => item.place_id}
                  showsVerticalScrollIndicator={false}
                  ListFooterComponent={
                    <View className="my-2">
                      <Text className="text-center text-rose-950 text-sm font-normal">
                        {places.length <= 0
                          ? "Hit the go button to search"
                          : "End of results"}
                      </Text>
                    </View>
                  }
                />
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: Colors.rose[50],
    color: Colors.rose[950],
    marginHorizontal: 10,
    marginVertical: 10,
  },
  searchBarText: {
    color: Colors.rose[950],
  },
});
