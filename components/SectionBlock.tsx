import React from "react";

interface SectionBlockProps {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function SectionBlock({
  number,
  title,
  description,
  children,
}: SectionBlockProps) {
  return (
    <div className="flex flex-col lg:flex-row border border-white/10 ">
      <div className="lg:w-[28%] justify-center items-start p-10 group">
        <p className="text-xs text-zinc-600 font-mono tracking-widest mb-6">
          /// {number}
        </p>

        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>

        <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-white transition-colors">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
