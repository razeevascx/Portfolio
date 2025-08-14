import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rajeev Puri Portfolio",
    short_name: "Rajeev Puri",
    description:
      "Professional portfolio of Rajeev Puri, showcasing web development projects and skills",
    start_url: "/",
    background_color: "#0f0f11",
    theme_color: "#22c55e",
    display: "standalone",
    orientation: "portrait",
    categories: ["portfolio", "development", "professional"],
    dir: "ltr",
    lang: "en",
    scope: "/",
    prefer_related_applications: false,
    related_applications: [],
    protocol_handlers: [
      {
        protocol: "mailto",
        url: "/contact?email=%s",
      },
    ],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
