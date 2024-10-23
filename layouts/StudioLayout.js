import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StudioProfile from "../screens/StudioProfile";

export default function StudioLayout({ children }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                Artists
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("StudioProfile")}
              style={styles.imageContainer}
            >
              <ImageBackground
                style={styles.imageBackground}
                source={require("../assets/studioprofile.png")}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "500",
    color: "#414141",
    letterSpacing: -0.37,
  },
  imageBackground: {
    width: 40,
    height: 40,
  },
});
