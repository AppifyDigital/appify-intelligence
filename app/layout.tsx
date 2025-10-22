import { Manrope } from "next/font/google";
import Script from "next/script";
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/images/logos/favicon.svg", type: "image/svg+xml" },
      {
        url: "/assets/images/logos/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/images/logos/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/assets/images/logos/favicon.ico",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: { media: "(prefers-color-scheme: light)", color: "#FFB300" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://appifyintelligence.com/#organization",
  name: "Appify Intelligence",
  legalName: "Appify Ltd.",
  url: "https://appifyintelligence.com",
  logo: "https://appifyintelligence.com/logo.png",
  description:
    "Award-nominated AI development and automation specialists delivering custom AI solutions, workflow automation, chatbots, RAG systems, and AI-augmented web solutions across Ireland and the UK.",
  foundingDate: "2020",
  email: "hello@appifyintelligence.com",
  telephone: "18008523073",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Ashfield",
      addressLocality: "Tullamore",
      addressRegion: "Co. Offaly",
      postalCode: "R35 KX60",
      addressCountry: "IE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "The Fold, Spencer St.",
      addressLocality: "Leamington Spa",
      postalCode: "CV31 3NE",
      addressCountry: "GB",
    },
  ],
  geo: [
    {
      "@type": "GeoCoordinates",
      latitude: "53.27411221361991",
      longitude: "-7.497778855818049",
    },
  ],
  areaServed: ["IE", "GB", "EU"],
  slogan: "Building AI systems that deliver real results.",
  brand: {
    "@type": "Brand",
    name: "Appify Intelligence",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "AI Consulting",
    "AI Automation",
    "AI Chatbots",
    "AI Agents",
    "AI Dashboards",
    "RAG Systems",
    "Retrieval-Augmented Generation",
    "Machine Learning",
    "Natural Language Processing",
    "Web Development",
    "Mobile Development",
    "Process Automation",
    "Workflow Automation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Consulting",
          description:
            "Strategic AI consulting, readiness assessments, and implementation planning",
          serviceType: "AI Consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation",
          description:
            "Business process automation, workflow orchestration, and intelligent automation solutions",
          serviceType: "AI Automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbots & Agents",
          description:
            "Intelligent chatbots and AI agents for customer service, HR, training, and mental health support",
          serviceType: "AI Chatbot Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Dashboards",
          description:
            "Real-time analytics dashboards with predictive insights and automated reporting",
          serviceType: "AI Dashboard Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "RAG Systems",
          description:
            "Retrieval-Augmented Generation systems for enterprise knowledge management and intelligent content generation",
          serviceType: "RAG System Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Augmented Web Solutions",
          description:
            "AI-powered web applications with intelligent user interfaces and automated content generation",
          serviceType: "AI Web Development",
        },
      },
    ],
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "AI Consulting Services",
      description: "Strategic AI consulting and implementation planning for businesses",
      url: "https://appifyintelligence.com/services/ai-consulting",
    },
    {
      "@type": "Offer",
      name: "AI Automation Solutions",
      description: "Workflow automation and intelligent process optimization",
      url: "https://appifyintelligence.com/services/ai-automation",
    },
    {
      "@type": "Offer",
      name: "AI Chatbots & Agents",
      description: "Custom AI chatbots and intelligent agents",
      url: "https://appifyintelligence.com/services/ai-chatbots-agents",
    },
    {
      "@type": "Offer",
      name: "AI Dashboards",
      description: "Real-time analytics and predictive insights dashboards",
      url: "https://appifyintelligence.com/services/ai-dashboards",
    },
    {
      "@type": "Offer",
      name: "RAG Systems",
      description: "Enterprise knowledge management with RAG technology",
      url: "https://appifyintelligence.com/services/rag-systems",
    },
    {
      "@type": "Offer",
      name: "AI-Augmented Web Solutions",
      description: "AI-powered web applications and platforms",
      url: "https://appifyintelligence.com/services/ai-augmented-web-solutions",
    },
  ],
  award: [
    "Digital Media Awards - Best App Finalist",
    "Digital Media Awards - Best Small Agency Finalist",
    "Digital Media Awards - Best Use of AI Finalist",
  ],
  sameAs: [
    "https://www.linkedin.com/company/appify-limited/",
    "https://www.facebook.com/appify.digital",
    "https://www.instagram.com/appify_digital/",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://appifyintelligence.com/#localbusiness",
  name: "Appify Intelligence - AI Development Ireland",
  image: "https://appifyintelligence.com/logo.png",
  description:
    "Award-nominated AI development and automation specialists in Ireland. Expert AI consulting, automation, chatbots, RAG systems, and AI-augmented web solutions for businesses across Ireland and the UK.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ashfield",
    addressLocality: "Tullamore",
    addressRegion: "Co. Offaly",
    postalCode: "R35 KX60",
    addressCountry: "IE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "53.27411221361991",
    longitude: "-7.497778855818049",
  },
  url: "https://appifyintelligence.com",
  telephone: "1800852307",
  email: "hello@appifyintelligence.com",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Ireland",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "53.27411221361991",
        longitude: "-7.497778855818049",
      },
      geoRadius: "500000",
    },
  ],
  priceRange: "€€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Stephen Gribben",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-01-15",
      reviewBody:
        "Appify have become more than just my tech partner... they are our tech advisors, consultation and project management experts. Their communication and management capabilities led to seamless collaboration.",
    },
  ],
  hasMap: "https://maps.google.com/?q=53.27411221361991,-7.497778855818049",
  sameAs: [
    "https://www.linkedin.com/company/appify-limited/",
    "https://www.facebook.com/appify.digital",
    "https://www.instagram.com/appify_digital/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PXVLSY2B83"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PXVLSY2B83', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className={manrope.className}>
        <Navbar />
        {children}
        <Footer />
        <CookieBar />
      </body>
    </html>
  );
}
