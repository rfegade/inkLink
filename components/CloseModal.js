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
    <View>
      <View
        style={{
          display: "flex",
          width: "90%",
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
          gap: 16,
          alignItems: "center",
          //   alignSelf: "stretch",
          //   flexShrink: 0,
          //   flexWrap: "nowrap",
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopWidth: 1,
          borderTopStyle: "solid",
          borderTopColor: "#e0e0e0",
          position: "relative",
        }}
      >
        <View
          style={{
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
          }}
        >
          <Text
            style={{
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
            }}
            numberOfLines={1}
          >
            Are you sure you want to delete Artist Name?
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          width: 398,
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
        }}
      >
        <View
          style={{
            display: "flex",
            width: 199,
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
            zIndex: 4,
          }}
        >
          <Text
            style={{
              display: "flex",
              width: 140,
              height: 21,
              justifyContent: "center",
              alignItems: "flex-start",
              flexShrink: 0,
              flexBasis: "auto",
              fontFamily: "Poppins",
              fontSize: 14,
              fontWeight: "500",
              lineHeight: 21,
              color: "#0078fb",
              position: "relative",
              textAlign: "center",
              zIndex: 5,
            }}
            numberOfLines={1}
          >
            No
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            width: 199,
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
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 0,
            position: "relative",
            zIndex: 6,
          }}
        >
          <Text
            style={{
              display: "flex",
              width: 140,
              height: 21,
              justifyContent: "center",
              alignItems: "flex-start",
              flexShrink: 0,
              flexBasis: "auto",
              fontFamily: "Poppins",
              fontSize: 14,
              fontWeight: "500",
              lineHeight: 21,
              color: "#f44336",
              position: "relative",
              textAlign: "center",
              zIndex: 7,
            }}
            numberOfLines={1}
          >
            Yes
          </Text>
        </View>
      </View>
    </View>
  );
}
