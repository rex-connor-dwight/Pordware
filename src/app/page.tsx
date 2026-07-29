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
    </>
  );
}