import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();
  const onboardingSteps = [
    {
      title: "Pour Over",
      description:
        "The art of hand-pouring water over fresh grounds for a clean, bright cup.",
      // You'll need to add actual image assets
      image: require("../../assets/images/chemex.jpg"),
    },
    {
      title: "French Press",
      description:
        "Full-bodied and rich, perfect for those who love a robust coffee experience.",
      image: require("../../assets/images/frenchpress.jpg"),
    },
    {
      title: "Aeropress",
      description:
        "Quick, versatile, and perfect for both home and travel brewing.",
      image: require("../../assets/images/aeropress.webp"),
    },
  ];
  const handleGetStarted = () => {
    if (currentStep === onboardingSteps.length - 1) {
      // Alert.alert("Welcome to the club!");
      navigation.navigate("Home");
    }
  };
  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    handleGetStarted();
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={onboardingSteps[currentStep].image}
        style={{
          width: 250,
          height: 250,
          marginBottom: 40,
        }}
        resizeMode="contain"
      />

      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 16,
          color: "#4A3428",
        }}
      >
        {onboardingSteps[currentStep].title}
      </Text>

      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          marginBottom: 40,
          color: "#6F5E53",
          paddingHorizontal: 20,
        }}
      >
        {onboardingSteps[currentStep].description}
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        {onboardingSteps.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: currentStep === index ? "#4A3428" : "#D1C4BC",
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#4A3428",
          paddingVertical: 16,
          paddingHorizontal: 32,
          borderRadius: 25,
          width: "80%",
          alignItems: "center",
        }}
        onPress={handleNext}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
