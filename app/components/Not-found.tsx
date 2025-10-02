import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import Button from "@/components/ui/Button";
import { cn } from "@/components/lib/utils";

export function NotFound({ className }: { className?: string }) {
  return (
    <div className={cn("flex  flex-col items-center ", className)}>
      <img
        className="object-cover hover:scale-105 transition-transform duration-300  "
        src="11102.png"
        alt="github_avatar"
      />
      <h1 className="mt-8 mb-6 font-mono text-8xl font-medium">404 Error</h1>

      <ul className="mt-8 mb-6 font-mono text-4xl font-medium text-center">
        {" "}
        Lets get back to{" "}
        <span>
          <Link href="/" className="text-blue-500 underline" replace>
            Home
          </Link>
        </span>
      </ul>
    </div>
  );
}
