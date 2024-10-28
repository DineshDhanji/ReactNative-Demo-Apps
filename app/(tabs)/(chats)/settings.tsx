import { Text, View, Image, Pressable, ScrollView } from "react-native";
import { Avatar, Button, List } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Colors } from "@/constants/Colors";
export default function Settings() {
  // const secondaryMain = Colors.palette.secondary.main;
  return (
    <ScrollView>
      <View className="bg-white h-full">
        <View className="h-24 flex flex-row items-center justify-evenly bg-white">
          <View className="flex justify-center items-center size-20">
            <Avatar.Image
              size={65}
              source={{
                uri: "https://i.pinimg.com/564x/da/1d/b1/da1db1452129ce8557f08c8983403752.jpg",
              }}
            />
          </View>
          <View className="ps-3 w-3/6">
            <Text className="text-black text-2xl font-normal">Naomi</Text>
            <Text className="text-gray text-lg">Your Status</Text>
          </View>
          <View className="flex justify-center items-end p-3  size-24">
            <Pressable className="bg-white hover:bg-secondary-main active:bg-secondary-main rounded-full">
              <Ionicons
                name="add-circle-outline"
                size={30}
                color={Colors.palette.primary.main}
              />
            </Pressable>
          </View>
        </View>
        <View className="bg-white">
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Account"
              description="Security notifications, change number"
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons name="key-outline" size={27} color="black" />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Privacy"
              description="Block contacts, disappearing messages"
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons
                    name="lock-closed-outline"
                    size={27}
                    color="black"
                  />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Avatar"
              description="Create, edit profile picture"
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons name="person-outline" size={27} color="black" />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Favorites"
              description="Add, reorder, remove"
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons name="heart-outline" size={27} color="black" />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Chats"
              description="Theme, wallpapers, chat history"
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons
                    name="chatbox-ellipses-outline"
                    size={27}
                    color="black"
                  />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Notifications"
              description="Message, group & call tones"
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons
                    name="notifications-outline"
                    size={27}
                    color="black"
                  />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Storage and data"
              description="Network usage, auto-download"
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons name="cloud-outline" size={27} color="black" />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="App language"
              description="English, (device language)"
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons name="earth-outline" size={27} color="black" />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Help"
              description="Help center, contact us, privacy policy"
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons
                    name="help-circle-outline"
                    size={27}
                    color="black"
                  />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Invite a friend"
              description=""
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons
                    name="people-circle-outline"
                    size={27}
                    color="black"
                  />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="App updates"
              description=""
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons
                    name="phone-portrait-outline"
                    size={27}
                    color="black"
                  />
                </View>
              )}
            />
          </View>
          <List.Subheader>Also from Meta</List.Subheader>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Open Instagram"
              description=""
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons name="logo-instagram" size={27} color="black" />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Open Facebook"
              description=""
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <Ionicons name="logo-facebook" size={27} color="black" />
                </View>
              )}
            />
          </View>
          <View className="hover:bg-secondary-main active:bg-secondary-main">
            <List.Item
              title="Open Facebook"
              description=""
              titleStyle={{ color: "black" }}
              descriptionStyle={{ color: "black" }}
              left={(props) => (
                <View className="ms-3 justify-center items-center size-14">
                  <FontAwesome6 name="threads" size={27} color="black" />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
