import React from "react";
import { cn } from "@/components/lib/utils";
import Link from "next/link";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  " font-semibold  gap-1 duration-200  inline-flex items-center   text-sm leading-4 hover:scale-105 whitespace-nowrap gap-2 ",
  {
    variants: {
      variant: {
        secondary: "bg-gray-200 text-gray-800 shadow-sm hover:bg-gray-300 ",
        default: "shadow-xs bg-neutral-800 text-white",
        destructive:
          "bg-red-800 text-white shadow-xs hover:bg-red-800/90 focus-visible:ring-red-800/20 dark:focus-visible:ring-red-800/40 dark:bg-red-800/60",
        outline: "border border-gray-300 shadow-xs hover:border-gray-300/5 ",
        ghost: "bg-transparent  hover:bg-neutral-800",
        link: "underline-offset-4 hover:underline text-blue-600",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export default function Button({
  children,
  name,
  variant,
  icon,
  color,
  size,
  link,
  className,
}) {
  const classes = cn(
    buttonVariants({ variant, size }),
    color
      ? `border border-[${color}] text-[${color}] hover:border-[${color}]/20`
      : "",
    className
  );
  return link ? (
    <Link href={link}>
      <button className={classes}>
        {icon}

        {name}
        {children}
      </button>
    </Link>
  ) : (
    <button className={classes}>
      {icon}

      {name}
      {children}
    </button>
  );
}
