import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Utils/Navbar";
import Footer from "./components/Utils/Footer";
import CookieBar from "./components/Utils/CookieBar";
import { Metadata, Viewport } from "next";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Development & Automation Specialists | Appify Intelligence Ireland",
  description:
    "Appify Intelligence delivers award-nominated AI, web, and mobile development. Experts in AI automation, workflow, and custom agency solutions.",
  alternates: {
    canonical: "https://appifyintelligence.com",
  },
  openGraph: {
    title: "AI Development & Automation Specialists | Appify Intelligence",
    description:
      "Discover Appify Intelligence's award-nominated AI expertise—custom solutions for web, mobile, automation, and agency management across Ireland.",
    type: "website",
    url: "https://appifyintelligence.com",
    images: [
      {
        url: "https://appifyintelligence.com/appify-intelligence-og-image.png",
        width: 1200,
        height: 630,
        alt: "Appify Intelligence - AI Development & Automation Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development & Automation Specialists | Appify Intelligence",
    description:
      "AI-powered software, web, and mobile solutions. Explore our award-nominated expertise and innovative in-house AI products.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: { media: "(prefers-color-scheme: light)", color: "#FFB300" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />
        {children}
        <Footer />
        <CookieBar />
      </body>
    </html>
  );
}
