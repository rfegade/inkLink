import React from "react";
import { View, Text } from "react-native";
import SvgLogo from "../assets/logo.svg";

export default function Logo() {
  return (
    <View
      style={{
        display: "flex",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        position: "relative",
        marginBottom: 0,
        margin: "auto",
      }}
    >
      <SvgLogo
        width={114}
        height={88}
        resizeMode="cover"
        style={{
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      />
      <Text
        style={{
          height: 24,
          //   alignSelf: "stretch",
          //   flexShrink: 0,
          //   flexBasis: "auto",
          fontFamily: "Poppins",
          fontSize: 16,
          fontWeight: "400",
          lineHeight: 24,
          color: "#757575",
          //   position: "relative",
          textAlign: "center",
          //   zIndex: 2,
        }}
      >
        manage your schedule w/o managing
      </Text>
    </View>
  );
}
