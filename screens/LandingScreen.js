import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import SvgStudio from "../assets/icons/studio.svg";
import SvgPenTool from "../assets/icons/pentool.svg";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import LandingScreenRoleCard from "../components/LandingScreenRoleCard";

export default function LandingScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View
          style={{
            width: 430,
            height: 932,
            position: "relative",
            overflow: "hidden",
            marginTop: 0,
            marginRight: "auto",
            marginBottom: 0,
            marginLeft: "auto",
            backgroundColor: "#F5F5F5",
          }}
        >
          <Logo />
          <LandingScreenRoleCard />
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
