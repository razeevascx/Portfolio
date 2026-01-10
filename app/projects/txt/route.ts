import { NextRequest } from "next/server";
import {
  colors,
  Header,
  isCurlRequest,
  AccessDeniedResponse,
  CurlResponse,
  Legend,
  Separator,
  wrapText,
} from "@/lib/curl-utils";
import { projectList } from "@/utils/Constants";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  if (!isCurlRequest(userAgent)) {
    return AccessDeniedResponse();
  }

  const projectsContent = projectList.map((project) => {
    const techBadges = Object.values(project.tech)
      .map((t) => `${colors.CYAN}${t.id}${colors.RESET}`)
      .join(" ");

    const wrappedDescription = wrapText(project.description, 95, "  ");

    return `
  ${colors.WHITE}${colors.BOLD}${project.title}${colors.RESET}

${wrappedDescription}

  ${colors.LIGHT_CYAN}Tech Stack:${colors.RESET} ${techBadges}
  ${colors.GOLD}Link:${colors.RESET}${colors.CYAN}${project.link}${colors.RESET}
`;
  });

  const ctaSection = `
  ${colors.BRIGHT_CYAN}${colors.BOLD}Interested in Collaborating?${colors.RESET}

  ${colors.DIM}I'm always open to discussing new projects and opportunities.${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/contact${colors.RESET}  ${colors.DIM}Get in touch${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/service${colors.RESET}  ${colors.DIM}See what I can do for you${colors.RESET}`;

  const content = `${Header("PROJECTS", "02", " Showcase of my work")}
${projectsContent.join("\n")}
${Separator()}
${ctaSection}
${Separator()}
${Legend()}

  ${colors.DIM}💡 Tip: Visit the live demos to see the projects in action!${
    colors.RESET
  }
`;

  return CurlResponse(content);
}
