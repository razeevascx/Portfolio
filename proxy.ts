import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const pathname = request.nextUrl.pathname;

  // Check if request is from curl
  if (userAgent.toLowerCase().includes("curl")) {
    // Map routes to their txt endpoints
    const routeMap: Record<string, string> = {
      "/": "/txt",
      "/contact": "/contact/txt",
      "/projects": "/projects/txt",
      "/service": "/service/txt",
    };

    if (pathname in routeMap) {
      return NextResponse.rewrite(new URL(routeMap[pathname], request.url));
    }
  }

  // For all other requests, pass through normally
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
