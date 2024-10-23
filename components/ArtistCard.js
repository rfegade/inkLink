import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SharingOptions from "./SharingOptions";
import AvailabilityDays from "./AvailabilityDays";
import SvgClose from "../assets/icons/close.svg";
import CloseModal from "./CloseModal";

export default function ArtistCard() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [closeModalVisible, setCloseModalVisible] = useState(false);

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
              <TouchableOpacity onPress={() => setCloseModalVisible(true)}>
                <SvgClose
                  width="24"
                  height="24"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "90%", // Positioning based on percentage
                    overflow: "hidden",
                    zIndex: 23,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Availability Calendar */}
          <AvailabilityDays />
        </View>

        {/* Share Availability */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.buttonContainer}
        >
          <Text style={styles.button} numberOfLines={1}>
            Share Schedule
          </Text>
        </TouchableOpacity>
      </View>

      {/* Close Button Modal */}
      <Modal
        visible={closeModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setCloseModalVisible(false)}
      >
        <View style={styles.overlay}>
          {/* Touchable area to close the modal */}
          <TouchableOpacity
            style={styles.overlayBackground}
            onPress={() => setCloseModalVisible(false)}
          />
          <CloseModal />
        </View>
      </Modal>

      {/* Sharing Options Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          {/* Touchable area to close the modal */}
          <TouchableOpacity
            style={styles.overlayBackground}
            onPress={() => setModalVisible(false)}
          />
          <SharingOptions />
        </View>
      </Modal>
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
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
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
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
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
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
  },
  overlayBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    width: "80%", // Adjust based on your needs
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
