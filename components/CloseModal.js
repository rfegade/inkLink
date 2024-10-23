import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

export default function CloseModal() {
  return (
    <View style="width:95%">
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>
            Are you sure you want to delete Artist Name?
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonTextNo}>No</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonTextYes}>Yes</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    gap: 16,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: "#e0e0e0",
    position: "relative",
  },
  innerContainer: {
    display: "flex",
    height: 35,
    gap: 4,
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
    zIndex: 1,
  },
  text: {
    height: 24,
    alignSelf: "stretch",
    flexShrink: 0,
    flexBasis: "auto",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    color: "#414141",
    position: "relative",
    textAlign: "left",
    zIndex: 2,
  },
  buttonContainer: {
    display: "flex",
    alignSelf: "stretch",
    // width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    flexShrink: 0,
    flexWrap: "nowrap",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderStyle: "solid",
    position: "relative",
    zIndex: 3,
  },
  buttonWrapper: {
    display: "flex",
    alignSelf: "stretch",
    width: "50%",
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 16,
    paddingLeft: 8,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    flexWrap: "nowrap",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: "#e0e0e0",
    position: "relative",
  },
  buttonTextNo: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
    color: "#0078fb",
  },
  buttonTextYes: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
    color: "#f44336",
  },
});
