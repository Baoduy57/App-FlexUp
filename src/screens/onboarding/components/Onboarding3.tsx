import React from "react";
import OnboardingTemplate from "./OnboardingTemplate";

export default function Onboarding3({ onNext }: { onNext: () => void }) {
  return (
    <OnboardingTemplate
      title="Eat Well"
      description="Let’s start a healthy lifestyle with us, we can determine your diet every day. Healthy eating is fun."
      image={require("../../../../assets/image/ngon9.png")}
      onNext={onNext}
      isLast={false}
    />
  );
}
