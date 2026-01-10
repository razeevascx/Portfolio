import { NextRequest } from "next/server";
import {
  colors,
  Header,
  Separator,
  isCurlRequest,
  AccessDeniedResponse,
  CurlResponse,
  Legend,
} from "@/lib/curl-utils";
import { socialLinks } from "@/utils/Constants";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  if (!isCurlRequest(userAgent)) {
    return AccessDeniedResponse();
  }

  const contactInfo = `  ${colors.GRAY}// Contact Information${colors.RESET}
  ${colors.YELLOW}{${colors.RESET}
    ${colors.LIGHT_CYAN}name${colors.RESET}: ${colors.CYAN}"Rajeev Puri"${colors.RESET},
    ${colors.LIGHT_CYAN}email${colors.RESET}: ${colors.CYAN}"contact@rajeevpuri.com.np"${colors.RESET},
    ${colors.LIGHT_CYAN}title${colors.RESET}: ${colors.CYAN}"BSc Student && Software Engineer"${colors.RESET},
    ${colors.LIGHT_CYAN}github${colors.RESET}: ${colors.CYAN}"https://github.com/razeevascx"${colors.RESET},
    ${colors.LIGHT_CYAN}website${colors.RESET}: ${colors.CYAN}"https://rajeevpuri.com.np"${colors.RESET}
  ${colors.YELLOW}}${colors.RESET}`;

  const socialLinksContent = socialLinks
    .map((social) => {
      return `  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${
        colors.WHITE
      }${social.name.padEnd(12)}${colors.RESET} ${colors.CYAN}${social.url}${
        colors.RESET
      }`;
    })
    .join("\n");

  // What to expect section
  const expectSection = `
  ${colors.LIGHT_CYAN}${colors.BOLD} What to Expect${colors.RESET}

  ${colors.DIM}When reaching out, feel free to include:${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} Project details and goals
  ${colors.BRIGHT_CYAN}▸${colors.RESET} Timeline and budget expectations
  ${colors.BRIGHT_CYAN}▸${colors.RESET} Any specific requirements or questions
  ${colors.BRIGHT_CYAN}▸${colors.RESET} Your preferred communication method`;

  // Quick actions
  const quickActions = `
  ${colors.GOLD}${colors.BOLD}🚀 Quick Actions${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/projects${colors.RESET} ${colors.DIM}View my work${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/service${colors.RESET}  ${colors.DIM}See what I offer${colors.RESET}`;

  const content = `${Header("CONTACT", "04", " Get in touch with me")}
${contactInfo}
${Separator()}
  ${colors.WHITE}${colors.BOLD}Connect With Me${colors.RESET}
${socialLinksContent}
${Separator()}
${expectSection}
${Separator()}
${quickActions}
${Separator()}
${Legend()}

  ${
    colors.DIM
  }💡 Tip: I'm always excited to discuss new projects and opportunities!${
    colors.RESET
  }
`;

  return CurlResponse(content);
}
