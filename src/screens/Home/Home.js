import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SearchBar from "../../components/SearchBar";
import { brewMethods } from "../../data/brewMethods";
import BrewMethod from "../../components/BrewMethod";

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "#4A3428" }}>
        Prepare Coffee
      </Text>
      <SearchBar />

      <View style={{ marginTop: 20, flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#4A3428" }}>
          Brew Methods
        </Text>
        <Text style={{ color: "#8B7355", marginTop: 5 }}>
          Select a guide to start
        </Text>

        <ScrollView
          style={{ marginTop: 10 }}
          contentContainerStyle={{
            gap: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {brewMethods.map((item) => (
            <BrewMethod key={item.id} item={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
