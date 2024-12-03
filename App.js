import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/screens/Home/Home";
import BrewDetails from "./src/screens/Home/BrewDetails";
import Login from "./src/screens/Auth/Login";
import Register from "./src/screens/Auth/Register";
import Onboarding from "./src/screens/Welcome/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/navigation/HomeNavigation/HomeNavigation";
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <HomeNavigation />
          {/* <Home /> */}
          {/* <BrewDetails /> */}
          {/* <Login /> */}
          {/* <Register /> */}
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
