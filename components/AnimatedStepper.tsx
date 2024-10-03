import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import AnimatedCheck from "./svg/AnimatedCheck";

interface Step {
    number: number;
    label: string;
}

interface StepperProps {
    steps: Step[];
    currentStep: number;
    onStepClick: (stepNumber: number) => void;
}

const AnimatedStepper: React.FC<StepperProps> = ({
    steps,
    currentStep,
    onStepClick,
}) => {
    const scrollAreaRef = useRef<HTMLDivElement | null>(null);

    const scrollToCurrentStep = (stepIndex: number) => {
        const scrollArea = scrollAreaRef.current;
        if (scrollArea && scrollArea.children.length) {
            const stepElement = scrollArea.children[stepIndex] as HTMLElement;

            if (stepElement) {
                stepElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        }
    };

    useEffect(() => {
        scrollToCurrentStep(currentStep - 1);
    }, [currentStep]);

    return (
        <ScrollArea
            className="w-full whitespace-nowrap rounded-md"
            dir="rtl"
        >
            <div className="flex items-center p-4" ref={scrollAreaRef}>
                {steps.map((step, index) => (
                    <div
                        key={step.number}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-center">
                            <div className="flex flex-col items-center justify-center">
                                <motion.div
                                    onClick={() => onStepClick(step.number)}
                                    className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer",
                                        step.number === currentStep
                                            ? "bg-primary text-primary-foreground"
                                            : step.number < currentStep
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-secondary text-secondary-foreground"
                                    )}
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        scale: step.number === currentStep ? 1.1 : 1,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {step.number < currentStep ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <AnimatedCheck className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        step.number
                                    )}
                                </motion.div>
                                <motion.div
                                    className={cn(
                                        "mt-2 text-xs text-center w-20",
                                        step.number === currentStep
                                            ? "text-black font-bold"
                                            : "text-black"
                                    )}
                                    initial={{ opacity: 0.5 }}
                                    animate={{
                                        opacity: step.number === currentStep ? 1 : 0.5,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {step.label}
                                </motion.div>
                            </div>
                            {index < steps.length - 1 && (
                                <motion.div
                                    className="w-16 h-[2px] mb-5 -mx-5"
                                    initial={{ backgroundColor: "hsl(var(--muted))" }}
                                    animate={{
                                        backgroundColor: step.number <= currentStep ? "hsl(var(--primary))" : "hsl(var(--muted))",
                                        transition: { duration: 0.3 }
                                    }}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};

export default AnimatedStepper;