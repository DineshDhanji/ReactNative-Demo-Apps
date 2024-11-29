import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Text, Button, DataTable, ActivityIndicator } from "react-native-paper";
import axios from "axios";
import { Colors } from "@/constants/Colors";

export default function Index() {
  const [data, setData] = useState(null);
  const [serverError, setServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    setServerError(false);
    console.log("Initiating fetch request...");
    try {
      console.log("Requesting");
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_BACKEND_API_URL}/get_data/`,
        {
          timeout: 10000, // Timeout in ms
        }
      );

      // Since axios automatically parses JSON, no need to parse it again
      console.log(response.data); // Logging the data from the response
      setData(response.data);
    } catch (error) {
      setServerError(true);
      console.error("Error occurred:", error); // Log the entire error object to understand its structure

      // Handle different error types
      if (error.response) {
        // If the server responded with an error status code
        console.error("Server responded with:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        // If no response was received
        console.error("No response received:", error.request);
      } else {
        // General error (network issues, invalid config, etc.)
        console.error("Error setting up request:", error.message);
      }
    } finally {
      setIsLoading(false); // Make sure to stop loading in both success and failure cases
    }
  };

  return (
    <View className="flex-1 p-5 flex justify-between bg-rose-50">
      <View>
        <Text variant="headlineLarge" style={styles.roseLightText}>
          Say Hello to Maps
        </Text>
        <Text variant="bodyLarge" style={styles.roseText} className="mt-3">
          Well this is just a practice app so don't get worked up.
        </Text>
        <View
          className="m-1 mt-6 p-6 border rounded-2xl h-max shadow-2xl bg-rose-100"
          style={styles.boxShadow}
        >
          <Text variant="titleLarge" style={styles.backendHeading}>
            Data from backend
          </Text>

          <View className="mb-3">
            {isLoading ? (
              <ActivityIndicator
                animating={isLoading}
                hidesWhenStopped={true}
                color={Colors.rose[950]}
              />
            ) : serverError ? (
              <View className="border border-rose-950 rounded-md py-4 px-3 bg-rose-300 mb-4">
                <Text
                  variant="bodyLarge"
                  style={[styles.backendText, { marginBottom: 5 }]}
                >
                  Error whlie fetching (っ °Д °;)っ
                </Text>
                <Text variant="bodyMedium" style={styles.backendText}>
                  It seems like we are unable to fetch data from the server.
                  Don't get sad. We are working on it (jk).
                </Text>
              </View>
            ) : data ? (
              <View>
                <DataTable>
                  <DataTable.Row>
                    <DataTable.Cell textStyle={styles.backendText}>
                      App Name
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={styles.backendText}>
                      {data?.app_name || "undefined"}
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell textStyle={styles.backendText}>
                      Framework
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={styles.backendText}>
                      {data?.framework || "undefined"}
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell textStyle={styles.backendText}>
                      Language
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={styles.backendText}>
                      {data?.language || "undefined"}
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell textStyle={styles.backendText}>
                      Status
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={styles.backendText}>
                      {data?.status || "undefined"}
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell textStyle={styles.backendText}>
                      Version
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={styles.backendText}>
                      {data?.version || "undefined"}
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </View>
            ) : (
              <Text variant="bodyMedium" style={styles.backendText}>
                Hit the button to get data from backend.
              </Text>
            )}
          </View>

          <View className="w-1/2">
            <Button
              mode="contained-tonal"
              rippleColor={Colors.rose[800]}
              labelStyle={{ color: Colors.rose[50] }}
              textColor={Colors.rose[50]}
              contentStyle={{
                flexDirection: "row-reverse",
                backgroundColor: Colors.rose[900],
              }}
              icon="database-arrow-down-outline"
              onPress={getData}
            >
              Get data
            </Button>
          </View>
        </View>
      </View>
      <Link href={"/maps"} asChild>
        <Button
          mode="contained-tonal"
          rippleColor={Colors.rose[800]}
          labelStyle={{ color: Colors.rose[50] }}
          textColor={Colors.rose[50]}
          contentStyle={{
            flexDirection: "row-reverse",
            backgroundColor: Colors.rose[900],
          }}
          icon="arrow-right"
          onPress={() => console.log("Pressed")}
        >
          Go to map
        </Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  roseLightText: {
    color: Colors.rose[900],
  },
  roseText: {
    color: Colors.rose[950],
  },
  backendHeading: {
    fontWeight: "bold",
    color: Colors.rose[900],
    marginBottom: 10,
  },
  backendText: {
    color: Colors.rose[950],
  },
  boxShadow: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 38,
    shadowOpacity: 1,
  },
});
