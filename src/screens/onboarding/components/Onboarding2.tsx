import React from "react";
import OnboardingTemplate from "./OnboardingTemplate";

export default function Onboarding2({ onNext }: { onNext: () => void }) {
  return (
    <OnboardingTemplate
      title="Get Burn"
      description="Let’s keep burning, to achieve your goals. It hurts only temporarily, if you give up now you will be in pain forever."
      image={require("../../../../assets/image/ngon8.png")}
      onNext={onNext}
      isLast={false}
    />
  );
}
