import Foundation from "@/components/Foundation";
import Mechanism from "@/components/Mechanism";
import ThesisQuotes from "@/components/ThesisQuotes";
import Portfolio from "@/components/Portfolio";
import ArchitectTeaser from "@/components/ArchitectTeaser";
import ClosingCTA from "@/components/ClosingCTA";

export default function Home() {
  return (
    <>
      <Foundation />
      <ThesisQuotes />
      <Mechanism />
      <Portfolio />
      <ArchitectTeaser />
      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pordware",
            description:
              "Pordware is a venture firm that co-builds, invests in, and scales African startups across fintech, mobility, proptech, health tech, and agritech.",
            url: "https://pordware.org",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Abuja",
              addressCountry: "NG",
            },
          }),
        }}
      />
    </>
  );
}
