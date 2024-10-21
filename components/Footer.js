import React from "react";
import { View, Text } from "react-native";
import SvgHeart from "../assets/icons/heart.svg";
import SvgInfinity from "../assets/icons/infinity.svg";

export default function Footer() {
  return (
    <View
      style={{
        width: 430,
        height: 21,
        paddingTop: 2,
        paddingRight: 4,
        paddingBottom: 2,
        paddingLeft: 4,
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        position: "relative",
        zIndex: 3,
        marginTop: 240,
      }}
    >
      <Text
        style={{
          height: 21,
          flexShrink: 0,
          flexBasis: "auto",
          fontFamily: "Poppins",
          fontSize: 14,
          fontWeight: "400",
          lineHeight: 21,
          color: "#616161",
          position: "relative",
          textAlign: "center",
          zIndex: 4,
        }}
        numberOfLines={1}
      >
        Crafted with{" "}
        <SvgHeart width={16} height={17.307} style={{ marginRight: 3 }} /> from
        ink and needles, for art to{" "}
        <SvgInfinity width={16} height={16} style={{ marginLeft: 10 }} />.
      </Text>
    </View>
  );
}
