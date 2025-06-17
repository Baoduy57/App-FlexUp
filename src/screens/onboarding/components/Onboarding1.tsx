import React from "react";
import OnboardingTemplate from "./OnboardingTemplate";

export default function Onboarding1({ onNext }: { onNext: () => void }) {
  return (
    <OnboardingTemplate
      title="Track Your Goal"
      description="Don’t worry if you have trouble determining your goals. We can help you determine your goals and track them."
      image={require("../../../../assets/onboarding/onboard1.png")}
      onNext={onNext}
      isLast={false}
    />
  );
}
