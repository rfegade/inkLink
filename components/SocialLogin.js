import React from "react";
import { View, Text } from "react-native";
import SvgGoogle from "../assets/icons/google.svg";
import SvgApple from "../assets/icons/apple.svg";
import SvgFacebook from "../assets/icons/facebook.svg";

export default function SocialLogin() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        position: "relative",
        marginTop: 0,
        marginRight: "auto",
        marginBottom: 0,
        marginLeft: "auto",
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
          fontWeight: "600",
          lineHeight: 24,
          color: "#9e9e9e",
          position: "relative",
          textAlign: "center",
        }}
      >
        Login with
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          alignSelf: "stretch",
          flexShrink: 0,
          flexWrap: "nowrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        <View
          style={{
            width: 122,
            height: 52,
            flexShrink: 0,
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
            position: "relative",
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              position: "relative",
              overflow: "hidden",
              zIndex: 3,
              marginTop: 14,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 49,
            }}
          >
            <SvgGoogle
              width={"100%"}
              height={"100%"}
              style={{
                position: "absolute",
                top: 0,
                left: "0%",
                zIndex: 4,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: 122,
            height: 52,
            flexShrink: 0,
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
            position: "relative",
            overflow: "hidden",
            zIndex: 5,
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              position: "relative",
              overflow: "hidden",
              zIndex: 6,
              marginTop: 14,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 49,
            }}
          >
            <SvgApple
              width={20.216}
              height={24}
              style={{
                position: "relative",
                zIndex: 7,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 2,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: 122,
            height: 52,
            flexShrink: 0,
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
            position: "relative",
            overflow: "hidden",
            zIndex: 8,
          }}
        >
          <SvgFacebook
            width={24}
            height={24}
            style={{
              position: "relative",
              zIndex: 10,
              marginLeft: 5.621,
              width: 24,
              height: 24,
              overflow: "hidden",
              marginTop: 14,
              marginLeft: 49,
            }}
          />
        </View>
      </View>
    </View>
  );
}
