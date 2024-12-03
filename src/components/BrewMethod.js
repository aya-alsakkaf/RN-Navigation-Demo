import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const BrewMethod = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 15,
        borderRadius: 15,
        elevation: 2,
        shadowColor: "#4A3428",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: '48%',
      }}
    >
      <Image
        source={item.image}
        style={{ width: 150, height: 150, marginBottom: 12 }}
        resizeMode="contain"
      />
      <Text style={{ color: "#4A3428", fontSize: 16, fontWeight: "500" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default BrewMethod;

const styles = StyleSheet.create({});
