import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import LandingScreenRoleCard from "../components/LandingScreenRoleCard";
import LandingScreenLayout from "../layouts/landingScreenLayout";

export default function LandingScreen() {
  return (
    <LandingScreenLayout>
      <Logo />
      <LandingScreenRoleCard />
    </LandingScreenLayout>
  );
}
