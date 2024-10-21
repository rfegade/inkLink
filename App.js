import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./components/Logo";
import LandingScreen from "./screens/LandingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <LandingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
