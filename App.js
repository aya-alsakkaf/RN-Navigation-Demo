import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/screens/Home/Home";
import BrewDetails from "./src/screens/Home/BrewDetails";
import Login from "./src/screens/Auth/Login";
import Register from "./src/screens/Auth/Register";
import Onboarding from "./src/screens/Welcome/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation/AuthNavigation";
import HomeNavigation from "./src/navigation/HomeNavigation/HomeNavigation";
export default function App() {
  return (
    <NavigationContainer>
      {/* <Onboarding /> */}
      {/* <Home /> */}
      {/* <BrewDetails /> */}

      {/* <AuthNavigation /> */}
      <HomeNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
