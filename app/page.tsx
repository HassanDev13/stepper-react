"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Stepper from "@/components/ui/stepper";
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
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full md:w-[40%] mx-auto p-4 space-y-6">
      <div className="flex justify-center">
        <Image src="/me.png" width={150} height={150} alt="hacene" />
      </div>
      <div className="space-y-4 text-center">
        <h1 className="font-bold text-3xl">Stepper Example</h1>
        <h1 className="font-normal text-2xl">React - Shadcn</h1>
      </div>
    
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />

      <div className="mt-8 flex justify-between select-none">
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
      <Link  href={'/animated-stepper'} className="select-none text-foreground text-xs hover:text-zinc-800">see our Animated version</Link>
      </div>
    </div>
  );
}
