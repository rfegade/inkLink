import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import SocialLogin from "../components/SocialLogin";
import LandingScreenLayout from "../layouts/landingScreenLayout";

export default function LoginScreen() {
  return (
    <LandingScreenLayout socialLogin={<SocialLogin />}>
      <Logo />
    </LandingScreenLayout>
  );
}
