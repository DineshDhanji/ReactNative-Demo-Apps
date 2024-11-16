import {
  Text,
  View,
  ScrollView,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from "react-native";
import React from "react";

import ChatBox from "@/components/Chatbox";
import contacts from "@/constants/contacts";
import { Colors } from "@/constants/Colors";

export default function Index() {
  const [shownContacts, setShownContacts] = React.useState([]);
  React.useEffect(() => {
    setShownContacts(contacts);
  }, []);

  const searchContacts = (text) => {
    if (text === "") {
      setShownContacts(contacts);
    } else {
      console.log(text.toLowerCase());
      const filteredContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(text.toLowerCase());
      });
      console.log("Filtered Contacts", filteredContacts);
      setShownContacts(filteredContacts);
    }
  };
  return (
    <ScrollView className="bg-white">
      <KeyboardAvoidingView
        className="mt-2"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="bg-white justify-center items-center h-max px-3">
          <TextInput
            className="rounded-full w-full h-14 px-4 bg-gray-100 outline-none"
            placeholder="Ask Meta AI or Search"
            keyboardType="text"
            onChangeText={searchContacts}
          />
        </View>
      </KeyboardAvoidingView>
      <View className="flex flex-row items-center px-4 py-2 bg-white">
        <Pressable
          style={[chatsStyles.headercomponent, { backgroundColor: "#D0FECF" }]}
        >
          <Text style={chatsStyles.headerSelected}>All</Text>
        </Pressable>
        <Pressable style={chatsStyles.headercomponent}>
          <Text style={chatsStyles.headerText}>Unread</Text>
        </Pressable>
        <Pressable style={chatsStyles.headercomponent}>
          <Text style={chatsStyles.headerText}>Groups</Text>
        </Pressable>
      </View>
      {shownContacts.map((contact, index) => (
        <ChatBox key={index} contact={contact} />
      ))}
    </ScrollView>
  );
}

const chatsStyles = StyleSheet.create({
  headercomponent: {
    backgroundColor: "#F7F5F3",
    height: "auto",
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: "auto",
    marginRight: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#556067",
  },
  headerSelected: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#155923",
  },
});
