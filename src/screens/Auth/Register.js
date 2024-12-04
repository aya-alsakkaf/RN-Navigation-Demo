import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    console.log("Login attempted with:", email, password);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#fff", // Warm cream background
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 10,
          textAlign: "center",
          color: "#4A3428", // Dark coffee brown
          fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
        }}
      >
        Join the Brew
      </Text>

      <Text
        style={{
          fontSize: 16,
          marginBottom: 30,
          textAlign: "center",
          color: "#6F4E37", // Coffee brown
          fontStyle: "italic",
        }}
      >
        Start your coffee journey today
      </Text>

      <TextInput
        style={{
          height: 55,
          borderWidth: 1,
          borderColor: "#D2B48C", // Tan
          borderRadius: 12,
          paddingHorizontal: 15,
          marginBottom: 15,
          backgroundColor: "#FFFFFF",
          fontSize: 16,
          color: "#4A3428", // Dark coffee brown
        }}
        placeholder="Email"
        placeholderTextColor="#8B7355" // Light brown
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={{
          height: 55,
          borderWidth: 1,
          borderColor: "#D2B48C", // Tan
          borderRadius: 12,
          paddingHorizontal: 15,
          marginBottom: 25,
          backgroundColor: "#FFFFFF",
          fontSize: 16,
          color: "#4A3428", // Dark coffee brown
        }}
        placeholder="Password"
        placeholderTextColor="#8B7355" // Light brown
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#6F4E37", // Coffee brown
          height: 55,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#4A3428",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
        }}
        onPress={handleRegister}
      >
        <Text
          style={{
            color: "#FDF6E7", // Warm cream
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Text style={{ color: "#6F4E37" }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              color: "#4A3428", // Dark coffee brown
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
