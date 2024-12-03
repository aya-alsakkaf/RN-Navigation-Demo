import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React from "react";
import { brewMethods } from "../../data/brewMethods";
import BrewData from "../../components/BrewData";
import BrewInstructions from "../../components/BrewInstructions";

const BrewDetails = () => {
  const brewMethod = brewMethods.find((item) => item.id === 2);
  return (
    <ScrollView
      style={{
        padding: 20,
        backgroundColor: "#fff", // Warm cream background
      }}
    >
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 15,
          padding: 15,
          shadowColor: "#4A3428",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <Image
          source={brewMethod.image}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 10,
          }}
          resizeMode="contain"
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#4A3428", // Dark coffee brown
            fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
          }}
        >
          {brewMethod.name}
        </Text>
        <Text
          style={{
            color: "#6F4E37", // Coffee brown
            marginTop: 8,
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          {brewMethod.description}
        </Text>
      </View>

      <BrewData
        coffee={brewMethod.coffee}
        water={brewMethod.water}
        grinder={brewMethod.grinder}
        brewTime={brewMethod.brewTime}
      />

      <BrewInstructions instructions={brewMethod.instructions} />
    </ScrollView>
  );
};

export default BrewDetails;

const styles = StyleSheet.create({});
