import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Pordware: Venture Firm Backing African Startups",
  description:
    "Pordware is a venture firm that co-builds, invests in, and scales African startups across fintech, mobility, proptech, health tech, and agritech.",
  keywords: [
    "venture firm",
    "African startups",
    "venture studio",
    "fintech",
    "proptech",
    "agritech",
    "startup investment Africa",
    "Abuja venture capital",
  ],
  authors: [{ name: "Pordware" }],
  creator: "Pordware",
  metadataBase: new URL("https://pordware.org"),
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Pordware: Venture Firm Backing African Startups",
    description:
      "Pordware co-builds, invests in, and scales African startups across fintech, mobility, proptech, health tech, and agritech.",
    url: "https://pordware.org",
    siteName: "Pordware",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://pordware.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pordware — Venture Firm Backing African Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pordware: Venture Firm Backing African Startups",
    description:
      "Pordware co-builds, invests in, and scales African startups across fintech, mobility, proptech, health tech, and agritech.",
    images: ["https://pordware.org/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  manifest: "/site.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pordware",
  url: "https://pordware.org",
  description:
    "Pordware is a venture firm that co-builds, invests in, and scales African startups across fintech, mobility, proptech, health tech, and agritech.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
