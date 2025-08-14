import React from "react";
function Button({
  children,
  name,
  icon,
  size,
  color = "border-neutral-700 hover:border-neutral-700",
  iconColor = "#3B82F6",
  hoverColor,
  className = "",
}) {
  const baseClass =
    "rounded-20 font-semibold backdrop-blur-sm gap-1 transition-colors duration-200 hover:scale-105 inline-flex items-center rounded bg-neutral-800 p-1 text-sm leading-4 text-neutral-100 no-underline whitespace-nowrap"; // removed border-neutral-700
  const colorClass = color;
  const hoverClass = hoverColor ? `hover:${hoverColor}` : "";

  // Clone icon with color if iconColor is provided and icon is a React element
  const iconWithColor =
    icon && iconColor && icon.type
      ? React.cloneElement(icon, { color: iconColor })
      : icon;

  return (
    <button
      className={`${baseClass} h-${size} border ${colorClass} ${hoverClass} ${className}`}
    >
      {iconWithColor}
      {name}
      {children}
    </button>
  );
}

export default Button;
