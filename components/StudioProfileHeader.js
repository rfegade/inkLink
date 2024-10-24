import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function StudioProfileHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerInner}>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <ImageBackground style={styles.iconImage} />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Edit Studio</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Update</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    paddingBottom: 16,
    paddingTop: 16,
    gap: 16,
    alignItems: "center",
    backgroundColor: "#ffffff",
    position: "relative",
    width: "100%", // Full width
  },
  headerInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%", // Make it responsive with relative width
    maxWidth: 600, // Optional max width to prevent it from being too wide
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconImage: {
    width: 16,
    height: 10,
    marginTop: 7,
    marginLeft: 4,
  },
  titleContainer: {
    display: "flex",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateY: -15 }, { translateX: -51.5 }],
  },
  titleText: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
    color: "#414141",
    letterSpacing: -0.37,
    textAlign: "left",
  },
  buttonContainer: {
    display: "flex",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5601e",
    borderRadius: 4,
  },
  buttonText: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 10,
    lineHeight: 24,
    color: "#ffffff",
    textAlign: "center",
  },
});
