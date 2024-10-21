import React from "react";
import { View, Text } from "react-native";
import SvgStudio from "../assets/icons/studio.svg";
import SvgPenTool from "../assets/icons/pentool.svg";

export default function LandingScreenRoleCard() {
  return (
    <View
      style={{
        display: "flex",
        width: 430,
        flexDirection: "row",
        gap: 32,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        position: "relative",
        zIndex: 16,
        marginTop: 32,
        marginRight: 0,
        marginBottom: 0,
      }}
    >
      <View
        style={{
          display: "flex",
          width: 138,
          height: 100,
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
          gap: 8,
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          flexWrap: "nowrap",
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          borderBottomLeftRadius: 4,
          position: "relative",
          zIndex: 17,
        }}
      >
        <SvgStudio
          width={24}
          height={24}
          style={{
            position: "relative",
            zIndex: 19,
            marginTop: 2,
          }}
        />

        <Text
          style={{
            height: 27,
            alignSelf: "stretch",
            flexShrink: 0,
            flexBasis: "auto",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: 27,
            color: "#414141",
            position: "relative",
            textAlign: "center",
            zIndex: 20,
          }}
          numberOfLines={1}
        >
          Studio
        </Text>
      </View>
      <Text
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "21px",
          color: "#757575",
          position: "relative",
          textAlign: "center",
          zIndex: 21,
        }}
      >
        OR
      </Text>
      <View
        style={{
          display: "flex",
          width: 138,
          height: 100,
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
          gap: 8,
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          flexWrap: "nowrap",
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          borderBottomLeftRadius: 4,
          position: "relative",
          zIndex: 22,
        }}
      >
        <SvgPenTool
          width={24}
          height={24}
          style={{
            position: "relative",
            zIndex: 24,
            marginTop: 2,
          }}
        />

        <Text
          style={{
            height: 27,
            alignSelf: "stretch",
            flexShrink: 0,
            flexBasis: "auto",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: 27,
            color: "#414141",
            position: "relative",
            textAlign: "center",
            zIndex: 25,
          }}
          numberOfLines={1}
        >
          Individual
        </Text>
      </View>
    </View>
  );
}