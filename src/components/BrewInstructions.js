import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const BrewInstructions = ({ instructions }) => {
  return (
    <View
      style={{
        marginTop: 25,
        backgroundColor: "#FDF6E7", // Warm cream background
        padding: 15,
        borderRadius: 12,
        borderLeftWidth: 3,
        borderLeftColor: "#6F4E37", // Coffee brown accent
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 15,
          color: "#4A3428", // Dark coffee brown
          fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
        }}
      >
        Instructions
      </Text>

      {instructions.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            marginBottom: 12,
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              color: "#6F4E37", // Coffee brown
              fontWeight: "bold",
              marginRight: 8,
              fontSize: 16,
            }}
          >
            {index + 1}.
          </Text>
          <Text
            style={{
              color: "#5C4033", // Rich brown
              fontSize: 16,
              flex: 1,
              lineHeight: 22,
            }}
          >
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default BrewInstructions;

const styles = StyleSheet.create({});
