import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import LandingScreenRoleCard from "../components/LandingScreenRoleCard";

export default function LandingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <View style={{ flex: 1, position: "relative" }}>
        <ScrollView
          scrollEnabled={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#F5F5F5",
            }}
          >
            <Logo />
            <LandingScreenRoleCard />
          </View>
        </ScrollView>
        <Footer />
      </View>
    </SafeAreaView>
  );
}
