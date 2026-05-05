import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className,
}: Readonly<SectionHeadingProps>) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl mb-4 font-bold text-white",
        className,
      )}
    >
      {children}
    </h2>
  );
}
