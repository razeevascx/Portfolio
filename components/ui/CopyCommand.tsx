"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyCommandProps {
  command: string;
  label?: string;
  className?: string;
}

export default function CopyCommand({
  command,
  label = "Get Code",
  className = "",
}: Readonly<CopyCommandProps>) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex flex-col md:flex-row md:items-center md:justify-between px-3 md:px-4 py-3 md:py-3 gap-3 md:gap-0 border border-white/15 transition-all bg-white/10 hover:bg-white/15 backdrop-blur-lg group cursor-pointer w-full  ${className}`}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-2 flex-1">
        <span className="text-base md:text-lg font-medium text-white group-hover:text-white/80 transition-colors whitespace-nowrap">
          {label}
        </span>
        <code className="text-xs md:text-sm font-black text-blue-400 px-2 py-1 rounded bg-white/5 group-hover:bg-white/10 transition-colors overflow-x-auto">
          {command}
        </code>
      </div>

      <div className="flex items-center justify-center md:ml-4 md:pl-4 md:border-l border-white/10">
        {copied ? (
          <Check size={16} className="text-green-400" />
        ) : (
          <Copy
            size={16}
            className="text-white/50 group-hover:text-white/80 transition-colors duration-200"
          />
        )}
      </div>
    </button>
  );
}
