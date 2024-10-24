import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import StudioProfileHeader from "../components/StudioProfileHeader";
import ProfitShare from "../components/ProfitShare";
import StudioInfo from "../components/StudioInfo";

export default function StudioProfile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Header */}
          <StudioProfileHeader />
          {/* Profile Info */}
          <StudioInfo />
          {/* ARtists Profit Share */}
          <ProfitShare />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
