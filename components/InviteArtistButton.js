import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function InviteArtistButton() {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.inviteButton}>
        <Text style={styles.buttonText} numberOfLines={1}>
          Invite Artist
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: "#FFFFFF",
    marginTop: 20,
  },
  inviteButton: {
    display: "flex",
    width: "100%",
    height: 48,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    flexWrap: "nowrap",
    backgroundColor: "#e5601e",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    position: "relative",
  },
  buttonText: {
    display: "flex",
    width: 90,
    height: 24,
    justifyContent: "center",
    alignItems: "flex-start",
    flexShrink: 0,
    flexBasis: "auto",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    color: "#ffffff",
    position: "relative",
    textAlign: "center",
    zIndex: 1,
  },
});
