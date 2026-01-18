import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://osintjourno.com";

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "OSINT JOURNO | Open Source Intelligence & Investigative Journalism",
    template: "%s | OSINT JOURNO",
  },
  description:
    "OSINT JOURNO is a collective of open-source intelligence analysts and investigative journalists. We verify the unverifiable and track the untraceable using satellite imagery, digital forensics, and public data.",
  keywords: [
    "OSINT",
    "Open Source Intelligence",
    "Investigative Journalism",
    "Digital Forensics",
    "Geolocation",
    "SOCMINT",
    "Social Media Intelligence",
    "Satellite Imagery Analysis",
    "Due Diligence",
    "Corporate Investigation",
    "Fact Checking",
    "Verification",
    "Intelligence Analysis",
    "Cyber Investigation",
    "Data Analysis",
  ],
  authors: [{ name: "OSINT JOURNO Team", url: siteUrl }],
  creator: "OSINT JOURNO",
  publisher: "OSINT JOURNO",


  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "OSINT JOURNO",
    title: "OSINT JOURNO | Open Source Intelligence & Investigative Journalism",
    description:
      "We are a collective of open-source intelligence analysts and investigative journalists. We verify the unverifiable and track the untraceable.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
        alt: "OSINT JOURNO Logo",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@osint_journo",
    creator: "@osint_journo",
    title: "OSINT JOURNO | Open Source Intelligence & Investigative Journalism",
    description:
      "We are a collective of open-source intelligence analysts and investigative journalists. Decoding the digital footprint.",
    images: [`${siteUrl}/logo.png`],
  },

  // Robots and Indexing
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

  // Additional Meta
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OSINT JOURNO",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "A collective of open-source intelligence analysts and investigative journalists dedicated to exposing corruption, tracking conflicts, and verifying truth through open-source intelligence.",
  foundingDate: "2024",
  sameAs: [
    "https://x.com/osint_journo",
    "https://www.linkedin.com/company/osint-journo",
    "https://github.com/OSINT-JOURNO/",
    "https://medium.com/osint-journo/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "team@osintjourno.com",
    contactType: "customer service",
  },
  offers: [
    {
      "@type": "Offer",
      name: "OSINT Investigation Services",
      description:
        "Professional investigation services using open-source intelligence for journalists, legal teams, and organizations.",
    },
    {
      "@type": "Offer",
      name: "OSINT Training",
      description:
        "Comprehensive training programs covering geolocation, social media intelligence, and digital forensics.",
    },
  ],
};

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-F5YPW0N3XP";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {/* Fonts to match original landing page */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@200;300;400;500;600&family=JetBrains+Mono:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
        {/* Iconify for span.iconify icons (OSINT landing page) */}
        <Script
          src="https://code.iconify.design/3/3.1.0/iconify.min.js"
          strategy="afterInteractive"
        />
        {/* Iconify web component for <iconify-icon> (verify-certificate page) */}
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
