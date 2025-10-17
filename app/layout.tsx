import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Utils/Navbar";
import Footer from "./components/Utils/Footer";
import CookieBar from "./components/Utils/CookieBar";
import { Metadata } from "next";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Development & Automation Specialists | Appify Intelligence Ireland",
  description:
    "Appify Intelligence delivers award-nominated AI, web, and mobile development. Experts in AI automation, workflow, and custom agency solutions.",
  alternates: {
    canonical: "https://www.appifyintelligence.com",
  },
  themeColor: { media: "(prefers-color-scheme: light)", color: "#FFB300" },
  openGraph: {
    title: "AI Development & Automation Specialists | Appify Intelligence",
    description:
      "Discover Appify Intelligence's award-nominated AI expertise—custom solutions for web, mobile, automation, and agency management across Ireland.",
    type: "website",
    url: "https://www.appifyintelligence.com",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
