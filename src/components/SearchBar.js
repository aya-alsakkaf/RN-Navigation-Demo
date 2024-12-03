import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderWidth: 1,
        borderColor: "#8B7355",
        padding: 12,
        borderRadius: 15,
        marginTop: 20,
        backgroundColor: "#FFFFFF",
      }}
    >
      <AntDesign name="search1" size={24} color="#8B7355" />
      <TextInput 
        placeholder="Search brew guides..." 
        placeholderTextColor="#8B7355"
        style={{ color: "#4A3428" }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
