"use client"

import { Button } from "@/components/ui/button";
import Stepper from "@/components/ui/stepper";
import React from "react";

interface Step {
  number: number;
  label: string;
}
const steps: Step[] = [
  { number: 1, label: "البيانات الشخصية" },
  { number: 2, label: "السكن الحالي" },
  { number: 3, label: "المؤهل العلمي" },
  { number: 4, label: "البيانات الصحية" },
  { number: 5, label: "الاحتياجات" },
  { number: 6, label: "الحساب البنكي" },
  { number: 7, label: "مصادر الدخل" },
  { number: 8, label: "التابعون" },
  { number: 9, label: "المرفقات" },
];

export default function Home() {
  const [currentStep, setCurrentStep] = React.useState(1);

  const handleNext = () => {
    if (currentStep < 9) {
      setCurrentStep((prev) => Math.min(prev + 1, 9));
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  return (
    <div className="w-screen h-screen   mx-auto p-4 ">
      <h1 className="f">Stepper Example</h1>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />
   
      <div className="mt-8 flex justify-between">
        <Button onClick={handleNext} disabled={currentStep === 9}>
          التالي
        </Button>

        <Button
          onClick={handlePrev}
          variant="secondary"
          disabled={currentStep === 1}
        >
          السابق
        </Button>
      </div>
    </div>
  );
}
