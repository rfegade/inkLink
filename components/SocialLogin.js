import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgGoogle from "../assets/icons/google.svg";
import SvgApple from "../assets/icons/apple.svg";
import SvgFacebook from "../assets/icons/facebook.svg";

const windowWidth = Dimensions.get("window").width;

export default function SocialLogin() {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ArtistsList")}
          style={{
            flex: 1, // Let the button size auto-adjust
            height: 52,
            backgroundColor: "#ffffff",
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgGoogle width={24} height={24} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            height: 52,
            backgroundColor: "#ffffff",
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgApple width={24} height={24} />
        </View>
        <View
          style={{
            flex: 1,
            height: 52,
            backgroundColor: "#ffffff",
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgFacebook width={24} height={24} />
        </View>
      </View>
    </View>
  );
}
