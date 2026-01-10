import { NextRequest } from "next/server";
import {
  colors,
  Header,
  isCurlRequest,
  AccessDeniedResponse,
  CurlResponse,
  Legend,
  wrapText,
} from "@/lib/curl-utils";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  if (!isCurlRequest(userAgent)) {
    return AccessDeniedResponse();
  }

  const welcomeTitle = `${colors.BRIGHT_CYAN}${colors.BOLD}Welcome to my portfolio${colors.RESET}`;

  const aboutText = wrapText(
    `I'm a passionate software engineer who loves transforming ideas into elegant solutions. Currently pursuing BSc while building modern web applications and learning new technologies.`,
    100,
    "  "
  );

  // Skills section
  const skillsSection = `
  ${colors.GOLD}${colors.BOLD} Core Skills${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}Web Development${colors.RESET}    ${colors.DIM}React, Next.js, TypeScript${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}Backend${colors.RESET}            ${colors.DIM}Node.js, API Design, Databases${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}DevOps${colors.RESET}             ${colors.DIM}Linux, Docker, CI/CD${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}Cloud & Systems${colors.RESET}    ${colors.DIM}IBM Z, Mainframe Technologies${colors.RESET}`;

  const content = `${Header("HOME", "01", " Introduction")}
  ${welcomeTitle}

${aboutText}
${skillsSection}

${Legend()}
`;

  return CurlResponse(content);
}
