export const metadata = {
  title: "Contact Us | Appify Intelligence Ireland",
  description: "Get in touch with Appify Intelligence for AI development, automation, and consulting services. Contact our expert team for your AI project needs.",
  alternates: {
    canonical: "https://appifyintelligence.com/contact",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Appify Intelligence - AI Development Ireland",
      description: "Award-nominated AI development and automation specialists in Ireland. Expert AI consulting, automation, chatbots, RAG systems, and AI-augmented web solutions.",
      url: "https://appifyintelligence.com",
      telephone: "1800852307",
      email: "hello@appifyintelligence.com",
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
      geo: {
        "@type": "GeoCoordinates",
        latitude: "53.27411221361991",
        longitude: "-7.497778855818049",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      areaServed: ["IE", "GB", "EU"],
      priceRange: "€€€",
    }),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
