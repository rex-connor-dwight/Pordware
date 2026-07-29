import "./globals.css";
import { satoshi } from "@/lib/fonts";

export const metadata = {
  metadataBase: new URL("https://pordware.org"),
  title: {
    default: "Pordware: Venture Firm",
    template: "%s : Pordware",
  },
  description:
    "Pordware is a venture firm that co-builds, invests in, and scales African startups across fintech, mobility, proptech, health tech, and agritech.",
  openGraph: {
    title: "Pordware: Venture Firm",
    description:
      "Pordware is a venture firm that co-builds, invests in, and scales African startups across fintech, mobility, proptech, health tech, and agritech.",
    url: "https://pordware.org",
    siteName: "Pordware",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pordware: Venture Firm",
    description:
      "Pordware is a venture firm that co-builds, invests in, and scales African startups across fintech, mobility, proptech, health tech, and agritech.",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>{children}</body>
    </html>
  );
}