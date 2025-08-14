"use client";

import { usePathname } from "next/navigation";

export default function pathfinder() {
  const pathname = usePathname();
  return pathname;
}
