import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Logo from "./components/Logo";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import ArtistsList from "./screens/ArtistsList";
import SharingOptions from "./components/SharingOptions";
import CloseModal from "./components/CloseModal";
import StudioProfile from "./screens/StudioProfile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ArtistsList" component={ArtistsList} />
        <Stack.Screen name="SharingOptions" component={SharingOptions} />
        <Stack.Screen name="CloseModal" component={CloseModal} />
        <Stack.Screen name="StudioProfile" component={StudioProfile} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Hello World!!</Text>
    //   <LandingScreen />
    // </View>
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
