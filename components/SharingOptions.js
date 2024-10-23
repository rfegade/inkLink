import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import StudioLayout from "../layouts/StudioLayout";
import SvgCopy from "../assets/icons/copy.svg";
import SvgMore from "../assets/icons/moreHorizontal.svg";
import SvgQRCode from "../assets/icons/qrcode.svg";

export default function SharingOptions() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sharing Options</Text>
        <View style={styles.message}>
          <Text style={styles.messageText} numberOfLines={1}>
            This link is valid for a single use and will expire after it's used.
          </Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        {/* QR Code */}
        <View style={styles.icon}>
          <SvgCopy width="16" height="16" />
          <Text style={styles.title}>Copy Link</Text>
        </View>

        {/* QR Code */}
        <View style={styles.icon}>
          <SvgQRCode width="16" height="16" />
          <Text style={styles.title}>QR Code</Text>
        </View>

        {/* Share Via */}
        <View style={styles.icon}>
          <SvgMore width="16" height="16" />
          <Text style={styles.title}>Share Via</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    width: "95%", // Ensure it takes full width in the modal
  },
  header: {
    display: "flex",
    gap: 8,
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
    marginBottom: 20,
  },
  message: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
    zIndex: 2,
  },
  messageText: {
    height: 21,
    flexShrink: 0,
    flexBasis: "auto",
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    color: "#9e9e9e",
    position: "relative",
    textAlign: "left",
    zIndex: 3,
  },
  headerTitle: {
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
    zIndex: 1,
  },
  innerContainer: {
    display: "flex",
    gap: 16,
  },
  icon: {
    display: "flex",
    paddingTop: 8,
    paddingRight: 0,
    paddingBottom: 8,
    paddingLeft: 0,
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
    zIndex: 12,
  },
  title: {
    height: 24,
    flexShrink: 0,
    flexBasis: "auto",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: "#414141",
    position: "relative",
    textAlign: "left",
    zIndex: 21,
  },
  optionButton: {
    backgroundColor: "#0078fb",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 16,
  },
});
