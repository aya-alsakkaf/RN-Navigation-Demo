import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/screens/Home/Home";
import BrewDetails from "./src/screens/Home/BrewDetails";
import Login from "./src/screens/Auth/Login";
import Register from "./src/screens/Auth/Register";
import Onboarding from "./src/screens/Welcome/Onboarding";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Onboarding />
        {/* <Home /> */}
        {/* <BrewDetails /> */}
        {/* <Login /> */}
        {/* <Register /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
