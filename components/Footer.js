import React from "react";
import { View, Text } from "react-native";
import SvgHeart from "../assets/icons/heart.svg";
import SvgInfinity from "../assets/icons/infinity.svg";

export default function Footer() {
  return (
    <View
      style={{
        // paddingTop: 2,
        // paddingRight: 4,
        // paddingBottom: 2,
        // paddingLeft: 4,
        // gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        // zIndex: 3,
      }}
    >
      <Text
        style={{
          //   height: 21,
          //   flexShrink: 0,
          //   flexBasis: "auto",
          fontFamily: "Poppins",
          fontSize: 14,
          fontWeight: "400",
          lineHeight: 21,
          color: "#616161",
          //   position: "relative",
          textAlign: "center",
          //   zIndex: 4,
        }}
        numberOfLines={1}
      >
        Crafted with{" "}
        <SvgHeart width={16} height={17.307} style={{ marginRight: 3 }} /> from
        ink and needles, for art to{" "}
        <SvgInfinity width={16} height={16} style={{ marginLeft: 5 }} />.
      </Text>
    </View>
  );
}
