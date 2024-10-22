import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function ArtistCard() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.cardContainer}>
          {/* Profile pic and description */}
          <View style={styles.artistProfileContainer}>
            <ImageBackground
              style={styles.artistProfilePic}
              source={require("../assets/profilepic.png")}
              resizeMode="cover"
            />
            <View style={styles.descContainer}>
              <Text style={styles.artistName} numberOfLines={1}>
                Kent Towne
              </Text>
              <Text style={styles.artistDescription} numberOfLines={2}>
                Caligraphy, Blackwork, Traditional Tattoos, Black and Grey
                Tattoo Style
              </Text>
              {/* <View
                style={{
                  width: 24,
                  height: 24,
                  position: "absolute",
                  top: 0,
                  left: "90%", // Positioning based on percentage
                  overflow: "hidden",
                  zIndex: 23,
                }}
              >
                <ImageBackground
                  style={{
                    width: 20,
                    height: 20,
                    position: "relative",
                    zIndex: 24,
                    marginTop: 2,
                    marginLeft: 2,
                  }}
                  // source={require("./assets/images/946095dd-1d64-4874-bf62-a630f272257a.png")}
                />
              </View> */}
            </View>
          </View>

          {/* Availability Calendar */}
          <View style={styles.calendarContainer}>
            {["M", "T", "W", "T", "F", "S"].map((day, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  width: 32,
                  height: 32,
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  flexWrap: "nowrap",
                  backgroundColor: index % 2 === 0 ? "#e5601e" : "#9e9e9e",
                  borderRadius: 16,
                  position: "relative",
                  zIndex: 26 + index,
                }}
              >
                <Text style={styles.days} numberOfLines={1}>
                  {day}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Share Availability */}
        <View style={styles.buttonContainer}>
          <Text style={styles.button} numberOfLines={1}>
            Share Schedule
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    alignItems: "flex-start",
    flexWrap: "nowrap",
    position: "relative",
    zIndex: 15,
    marginTop: 16,
    marginHorizontal: 16,
  },
  innerContainer: {
    display: "flex",
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
    zIndex: 16,
  },
  cardContainer: {
    display: "flex",
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 16,
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexShrink: 0,
    flexWrap: "nowrap",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    position: "relative",
    zIndex: 17,
  },
  artistProfileContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
    zIndex: 18,
    width: "100%", // Use width 100% to fill the container
  },
  artistProfilePic: {
    width: 56,
    height: 56,
    borderRadius: 28, // Use borderRadius for circular image
    overflow: "hidden",
    zIndex: 19,
  },
  descContainer: {
    flex: 1, // Use flex to take the remaining width
    height: 70,
    gap: 4,
    justifyContent: "center",
    alignItems: "flex-start",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
    zIndex: 20,
  },
  artistName: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    color: "#414141",
    textAlign: "left",
  },
  artistDescription: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    color: "#757575",
    textAlign: "left",
  },
  calendarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
    zIndex: 25,
    width: "100%", // Full width
  },
  days: {
    height: 24,
    alignSelf: "stretch",
    flexShrink: 0,
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    color: "#f9f9f9",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    paddingVertical: 16,
    paddingHorizontal: 8,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0,
    flexWrap: "nowrap",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    position: "relative",
    zIndex: 38,
  },
  button: {
    height: 21,
    alignSelf: "stretch",
    flexShrink: 0,
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
    color: "#0078fb",
    textAlign: "center",
  },
});
