// ANSI 256-color codes - Updated to match design system
export const colors = {
  // Primary colors
  GREEN: "\x1b[38;5;82m",
  YELLOW: "\x1b[38;5;226m",
  CYAN: "\x1b[38;5;51m",
  LIGHT_CYAN: "\x1b[38;5;87m",
  RED: "\x1b[38;5;196m",
  PURPLE: "\x1b[38;5;141m",
  BLUE: "\x1b[38;5;27m",
  BRIGHT_BLUE: "\x1b[38;5;75m",
  ORANGE: "\x1b[38;5;208m",
  PINK: "\x1b[38;5;213m",

  // Extended palette for gradients
  DARK_BLUE: "\x1b[38;5;17m",
  DEEP_PURPLE: "\x1b[38;5;93m",
  LIGHT_PURPLE: "\x1b[38;5;183m",
  DARK_CYAN: "\x1b[38;5;30m",
  BRIGHT_CYAN: "\x1b[38;5;123m",
  GOLD: "\x1b[38;5;220m",
  LIGHT_YELLOW: "\x1b[38;5;228m",

  // Neutral colors
  WHITE: "\x1b[38;5;231m",
  LIGHT_GRAY: "\x1b[38;5;250m",
  GRAY: "\x1b[38;5;244m",
  DARK_GRAY: "\x1b[38;5;238m",

  // Reset
  RESET: "\x1b[0m",

  // Bold/styles
  BOLD: "\x1b[1m",
  DIM: "\x1b[2m",
};
const url = process.env.BASE_URL || "rajeevpuri.com.np";

export function Header(title: string, number: string, desc: string): string {
  const boxWidth = 100;
  const border = "═".repeat(boxWidth);

  // ASCII art lines
  const line1 = `${colors.YELLOW}███████╗  ███████╗            ██╗  ███████╗  ███████╗  ███████╗  ██╗   ██╗${colors.RESET}`;
  const line2 = `${colors.YELLOW}██╔══██╗  ██╔══██╗            ██║  ██╔════╝  ██╔════╝  ██╔════╝  ██║   ██║${colors.RESET}`;
  const line3 = `${colors.PURPLE}██████╔╝  ███████║            ██║  █████╗    █████╗    █████╗    ██║   ██║${colors.RESET}`;
  const line4 = `${colors.PURPLE}██╔══██╗  ██╔══██║       ██   ██║  ██╔══╝    ██╔══╝    ██╔══╝    ╚██╗ ██╔╝${colors.RESET}`;
  const line5 = `${colors.CYAN}██║  ██║  ██║  ██║       ╚█████╔╝  ███████╗  ███████╗  ███████╗   ╚████╔╝${colors.RESET}`;
  const line6 = `${colors.CYAN}╚═╝  ╚═╝  ╚═╝  ╚═╝        ╚════╝   ╚══════╝  ╚══════╝  ╚══════╝    ╚═══╝${colors.RESET}`;

  const tagline = `${colors.CYAN}IBM Z Student Ambassador | Software Engineer | Linux Enthusiast${colors.RESET}`;
  const links = `${colors.CYAN}rajeevpuri.com.np${colors.RESET} ${colors.PURPLE}|${colors.RESET} ${colors.CYAN}github.com/razeevascx${colors.RESET}`;
  const source = `${colors.CYAN}Source:${colors.RESET} ${colors.CYAN}github.com/razeevascx/portfolio${colors.RESET}`;

  // Center any line within the box
  const centerLine = (line: string): string => {
    const visibleLength = line.replace(/\x1b\[[0-9;]*m/g, "").length;
    const padding = Math.max(0, Math.floor((boxWidth - visibleLength) / 2));
    const rightPadding = Math.max(0, boxWidth - visibleLength - padding);
    return `${colors.BRIGHT_BLUE}║${colors.RESET}${" ".repeat(
      padding
    )}${line}${" ".repeat(rightPadding)}${colors.BRIGHT_BLUE}║${colors.RESET}`;
  };

  const divider = `${colors.DARK_GRAY}${"─".repeat(boxWidth)}${colors.RESET}`;

  const Title = `${colors.ORANGE}${number}${colors.RESET} ${colors.DARK_GRAY}❯${
    colors.RESET
  } ${colors.BOLD}${colors.WHITE}${title.toUpperCase()}${colors.RESET} ${
    colors.DARK_GRAY
  }:${colors.RESET} ${colors.GRAY}${desc}${colors.RESET}`;

  const asciiArt = `
  ${colors.BRIGHT_BLUE}╔${border}╗${colors.RESET}
  ${colors.BRIGHT_BLUE}║${" ".repeat(boxWidth)}║${colors.RESET}
  ${centerLine(line1)}
  ${centerLine(line2)}
  ${centerLine(line3)}
  ${centerLine(line4)}
  ${centerLine(line5)}
  ${centerLine(line6)}
  ${colors.BRIGHT_BLUE}║${" ".repeat(boxWidth)}║${colors.RESET}
  ${centerLine(tagline)}
  ${colors.BRIGHT_BLUE}║${" ".repeat(boxWidth)}║${colors.RESET}
  ${centerLine(links)}
  ${colors.BRIGHT_BLUE}║${" ".repeat(boxWidth)}║${colors.RESET}
  ${centerLine(source)}
  ${colors.BRIGHT_BLUE}║${" ".repeat(boxWidth)}║${colors.RESET}
  ${colors.BRIGHT_BLUE}╚${border}╝${colors.RESET}

  ${divider}
    ${Title}
  ${divider}
`;
  return asciiArt;
}

export function Separator(): string {
  return `  ${colors.DARK_GRAY}${"─".repeat(100)}${colors.RESET}`;
}

export function isCurlRequest(userAgent: string | null | undefined): boolean {
  const agent = String(userAgent || "");
  return agent.toLowerCase().includes("curl");
}

export function AccessDeniedResponse(): Response {
  return new Response(
    "Access denied. Please use curl to access this endpoint.",
    {
      status: 403,
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}

export function CurlResponse(content: string): Response {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

export function Legend(baseUrl: string = url): string {
  return `  ${colors.CYAN}Legend${colors.RESET}

    ${colors.YELLOW}$${colors.RESET} curl ${baseUrl}            Get the home page
    ${colors.YELLOW}$${colors.RESET} curl ${baseUrl}/projects   Get the list of projects
    ${colors.YELLOW}$${colors.RESET} curl ${baseUrl}/service    Get available services
    ${colors.YELLOW}$${colors.RESET} curl ${baseUrl}/contact    Get contact information`;
}

export function Box(content: string, width: number = 70): string {
  const top = `${colors.LIGHT_CYAN}╔${"═".repeat(width - 2)}╗${colors.RESET}`;
  const bottom = `${colors.LIGHT_CYAN}╚${"═".repeat(width - 2)}╝${colors.RESET}`;
  const lines = content.split("\n");

  const boxedLines = lines.map((line) => {
    const visibleLength = line.replace(/\x1b\[[0-9;]*m/g, "").length;
    const padding = Math.max(0, width - 4 - visibleLength);
    return `${colors.LIGHT_CYAN}║${colors.RESET} ${line}${" ".repeat(
      padding
    )} ${colors.LIGHT_CYAN}║${colors.RESET}`;
  });

  return `${top}\n${boxedLines.join("\n")}\n${bottom}`;
}

export function wrapText(text: string, width: number, indent = ""): string {
  const words = text.split(" ");
  const effectiveWidth = Math.max(10, width - indent.length);
  let lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    const visibleLength = word.replace(/\x1b\[[0-9;]*m/g, "").length;
    const currentVisibleLength = currentLine.replace(
      /\x1b\[[0-9;]*m/g,
      ""
    ).length;

    const spacer = currentLine ? 1 : 0;
    if (currentVisibleLength + spacer + visibleLength > effectiveWidth) {
      if (currentLine) lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine += (currentLine ? " " : "") + word;
    }
  });

  if (currentLine) lines.push(currentLine.trim());
  return indent + lines.join("\n" + indent);
}
