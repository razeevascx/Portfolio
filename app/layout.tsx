import { IBM_Plex_Sans, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { NoiseOverlay } from "@/components/background/Nebula";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajeevpuri.com.np"),
  title: "Rajeev Puri - Full Stack Engineer",
  description:
    "Full Stack Engineer building innovative web experiences with modern technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajeevpuri.com.np",
    title: "Rajeev Puri - Full Stack Engineer",
    description:
      "Full Stack Engineer building innovative web experiences with modern technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeev Puri - Full Stack Engineer",
    description:
      "Full Stack Engineer building innovative web experiences with modern technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/png"
        sizes="32x32"
      />
      <body
        className={`${ibmPlexSans.variable} ${geistMono.variable} antialiased font-sans dark`}
      >
        <Navbar />
        <NoiseOverlay />

        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
