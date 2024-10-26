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

export default function Index() {
  const [shownContacts, setShownContacts] = React.useState([]);

  const searchContacts = (text) => {
    // console.log(text);
    if (text === "") {
      console.log("Contacts", contacts);
      setShownContacts(contacts);
    } else {
      // console.log(text.toLowerCase())
      const filteredContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(text.toLowerCase()); // Filter based on name
      });
      setShownContacts(filteredContacts);
    }
  };
  return (
    <ScrollView style={chatsStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={chatsStyles.searchBarContainer}>
          <TextInput
            style={chatsStyles.searchBar}
            placeholder="Ask Meta AI or Search"
            keyboardType="text"
            onChangeText={searchContacts}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={chatsStyles.headerBar}>
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
      {contacts.map((contact, index) => (
        <ChatBox key={index} contact={contact} />
      ))}
    </ScrollView>
  );
}

const chatsStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  searchBarContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    borderRadius: 100,
    backgroundColor: "#F7F5F3",
    width: "95%",
    fontSize: 16,
    paddingHorizontal: 20,
    height: 50,
  },
  headerBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
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
