import React, { useState } from "react";
import Onboarding1 from "./components/Onboarding1";
import Onboarding2 from "./components/Onboarding2";
import Onboarding3 from "./components/Onboarding3";
import Onboarding4 from "./components/Onboarding4";

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);

  const screens = [
    <Onboarding1 key="1" onNext={() => setStep(1)} />,
    <Onboarding2 key="2" onNext={() => setStep(2)} />,
    <Onboarding3 key="3" onNext={() => setStep(3)} />,
    <Onboarding4 key="4" />,
  ];

  return screens[step];
}
