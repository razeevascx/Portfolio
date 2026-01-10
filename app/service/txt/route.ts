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
import { services } from "@/utils/Constants";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  if (!isCurlRequest(userAgent)) {
    return AccessDeniedResponse();
  }

  // Services section with enhanced styling
  const servicesContent = services
    .map((service) => {
      const wrappedDescription = wrapText(service.description, 95, "     ");

      const techBadges = service.technologies
        .map((tech) => `${colors.CYAN}${tech}${colors.RESET}`)
        .join(" ");

      return `
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}${colors.BOLD}${service.title}${colors.RESET}

${wrappedDescription}

     ${colors.LIGHT_CYAN}Tech Stack:${colors.RESET} ${techBadges}
`;
    })
    .join("\n");

  // CTA section
  const ctaSection = `
  ${colors.GOLD}${colors.BOLD}Ready to Start Your Project?${colors.RESET}

  ${colors.DIM}Let's discuss how I can help bring your ideas to life.${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/contact${colors.RESET}  ${colors.DIM}Get my contact information${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/projects${colors.RESET} ${colors.DIM}View my previous work${colors.RESET}`;

  const content = `${Header("SERVICES", "03", " Explore what I can do for you")}

  ${colors.BRIGHT_CYAN}${colors.BOLD}  What I Offer${colors.RESET}

  ${
    colors.DIM
  }Specializing in modern web development and cloud-native solutions${
    colors.RESET
  }
${servicesContent}

${ctaSection}

${Legend()}
`;

  return CurlResponse(content);
}
