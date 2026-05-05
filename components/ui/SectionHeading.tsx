import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2 className={cn("text-2xl md:text-3xl font-bold text-white", className)}>
      {children}
    </h2>
  );
}
