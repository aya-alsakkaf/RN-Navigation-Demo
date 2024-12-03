import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BrewData = ({ coffee, water, grinder, brewTime }) => {
  const dataBox = {
    width: "23%",
    height: 110,
    backgroundColor: "#FDF6E7",  // Warm cream
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D2B48C",  // Tan
    padding: 10,
    shadowColor: "#4A3428",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  };

  const labelStyle = {
    marginBottom: 8,
    color: "#8B7355",  // Light brown
    fontSize: 14,
    fontWeight: "500",
  };

  const valueStyle = {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A3428",  // Dark coffee brown
    textAlign: "center",
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      <View style={dataBox}>
        <Text style={labelStyle}>Coffee</Text>
        <Text style={valueStyle}>{coffee}</Text>
      </View>
      <View style={dataBox}>
        <Text style={labelStyle}>Water</Text>
        <Text style={valueStyle}>{water}</Text>
      </View>
      <View style={dataBox}>
        <Text style={labelStyle}>Grinder</Text>
        <Text style={valueStyle}>{grinder}</Text>
      </View>
      <View style={dataBox}>
        <Text style={labelStyle}>Brew Time</Text>
        <Text style={valueStyle}>{brewTime}</Text>
      </View>
    </View>
  );
};

export default BrewData;

const styles = StyleSheet.create({});
