import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
} from "react-native";
import SvgProfilePlaceholder from "../assets/profilePlaceholder.svg";

export default function StudioInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageBackground} resizeMode="cover">
          <View style={styles.uploadContainer}>
            <View style={styles.uploadIcon}>
              <SvgProfilePlaceholder
                width="100%"
                height="100%"
                style={styles.uploadIconImage}
              />
            </View>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>
              <Text style={styles.label}>Studio Name</Text>
              <Text style={styles.asterisk}>*</Text>
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Alien Tattoo Studio"
              style={styles.inputText}
            />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.asterisk}>*</Text>
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="alien@mymail.com"
              style={styles.inputText}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 16,
    width: "100%",
  },
  innerContainer: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 2,
    alignSelf: "stretch",
  },
  imageBackground: {
    width: 175, // keeping size fixed for circular profile image
    height: 175,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 92,
  },
  uploadContainer: {
    alignItems: "center",
    gap: 2,
  },
  uploadIcon: {
    width: 150,
    height: 150,
  },
  uploadIconImage: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    width: "100%", // take full width of the container
    marginTop: 16,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelText: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    color: "#757575",
  },
  asterisk: {
    color: "#e6737c",
  },
  inputContainer: {
    marginTop: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 2,
  },
  inputText: {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 27,
    color: "#bdbdbd",
    paddingBottom: 5,
  },
});
