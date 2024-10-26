import { Text, View, Image, Pressable, StyleSheet } from "react-native";

const defaultProfilePicture =
  "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg";
export default function ChatBox({ contact }) {
  return (
    <Pressable className="bg-white hover:bg-secondary-main flex flex-row px-3">
      <View className="m-auto">

      <Image
        style={chatsStyles.profilePicture}
        source={{
          uri: contact.profilePicture
          ? contact.profilePicture
          : defaultProfilePicture,
        }}
        />
        </View>
      <View style={chatsStyles.contactContainer}>
        <View style={chatsStyles.contactContainerLeft}>
          <Text style={chatsStyles.profileName} numberOfLines={1}>
            {contact.name}
          </Text>
          <Text style={chatsStyles.lastChat} numberOfLines={1}>
            {contact.lastMessage}
          </Text>
        </View>
        <View style={chatsStyles.contactContainerRight}>
          <Text style={chatsStyles.lastSeen} numberOfLines={1}>
            {contact.lastSeen}
          </Text>
          {
            // Show message bubble only if there are unread messages
            contact.unreadMessages > 0 && (
              <Text style={chatsStyles.messageBubble} numberOfLines={1}>
                {contact.unreadMessages}
              </Text>
            )
          }
        </View>
      </View>
    </Pressable>
  );
}

const chatsStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  profilePicture: {
    width: 55,
    height: 55,
    resizeMode: "contain",
    borderRadius: 100,
    marginRight: 15,
  },
  contactContainer: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    width: "100%",
    paddingVertical: 10,
  },
  contactContainerLeft: {
    width: "50%",
  },
  profileName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  lastChat: {
    fontSize: 15,
    fontWeight: "normal",
    marginTop: 4,
    color: "gray",
  },
  contactContainerRight: {
    width: "50%",
    paddingVertical: 2,
    alignItems: "flex-end",
  },
  lastSeen: {
    fontSize: 14,
    fontWeight: "normal",
    color: "gray",
    textAlign: "right",
    marginBottom: 5,
  },
  messageBubble: {
    fontSize: 14,
    backgroundColor: "#00AB50",
    color: "white",
    borderRadius: 100,
    width: 25,
    height: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
