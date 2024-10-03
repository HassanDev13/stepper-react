'use client'
import * as React from "react";
import { motion } from "framer-motion";

interface AnimatedCheckProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const AnimatedCheck: React.FC<AnimatedCheckProps> = ({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path
        d="M20 6L9 17l-5-5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default AnimatedCheck;