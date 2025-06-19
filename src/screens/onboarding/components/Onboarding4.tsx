import React from "react";
import OnboardingTemplate from "./OnboardingTemplate";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../config/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Onboarding4() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <OnboardingTemplate
      title="Improve Sleep Quality"
      description="Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning."
      image={require("../../../../assets/image/ngon2.png")}
      onNext={() => navigation.navigate("Register")}
      isLast
    />
  );
}
