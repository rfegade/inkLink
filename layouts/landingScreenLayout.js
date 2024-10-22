import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Footer from "../components/Footer";

export default function LandingScreenLayout({ children, socialLogin }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            {children}
          </View>
        </View>
        {/* Social Login just above Footer */}
        {socialLogin && (
          <View style={{ paddingBottom: 50, paddingHorizontal: 20 }}>
            {socialLogin}
          </View>
        )}
        <Footer />
      </View>
    </SafeAreaView>
  );
}
