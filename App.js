import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/screens/Home/Home";
import BrewDetails from "./src/screens/Home/BrewDetails";
import Login from "./src/screens/Auth/Login";
import Register from "./src/screens/Auth/Register";
import Onboarding from "./src/screens/Welcome/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/navigation/HomeNavigation/HomeNavigation";
import AuthNavigation from "./src/navigation/AuthNavigation/AuthNavigation";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
