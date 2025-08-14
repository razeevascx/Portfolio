import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  creator: "Rajeev Puri",
  icons: "/11102.png",
  title: "Rajeev Puri | Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  description:
    "Professional portfolio of Rajeev Puri, showcasing web development projects and skills",
  openGraph: {
    title: "Rajeev Puri | Portfolio",
    description:
      "Professional portfolio of Rajeev Puri, showcasing web development projects and skills",
    url: "https://rajeevpuri.com.np",
    siteName: "Rajeev Puri Portfolio",

    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Rajeev Puri Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeev Puri | Portfolio",
    description:
      "Professional portfolio of Rajeev Puri, showcasing web development projects and skills",
    images: ["/opengraph-image.png"],
    creator: "@razeev_asnx",
  },
  manifest: "/manifest.json",
  themeColor: "#22c55e",
  colorScheme: "dark",
  category: "portfolio",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://rajeevpuri.com.np",
    languages: {
      en: "https://rajeevpuri.com.np/en",
    },
    types: {
      "application/xml": "https://rajeevpuri.com.np/sitemap.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
