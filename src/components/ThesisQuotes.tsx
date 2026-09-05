"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const theses = [
  {
    sector: "Fintech",
    line: "Access, not just faster rails underneath a system that still leaves most Africans out.",
  },
  {
    sector: "Mobility",
    line: "Nigeria isn't a smaller version of anywhere else. We build from that logic, not around it.",
  },
  {
    sector: "Proptech",
    line: "Discovery, verification, and financing, solved as one chain, not three separate problems.",
  },
  {
    sector: "Health tech",
    line: "The market is nowhere near solved. There's room here to define a category, not chase one.",
  },
  {
    sector: "Agritech",
    line: "The largest untapped sector on the continent, waiting on real technology, not a thin app layer.",
  },
];

const companies = [
  { name: "Xeero", slug: "xeero" },
  { name: "GM1000", slug: "gm1000" },
  { name: "Ahono", slug: "ahono" },
  { name: "Wetaulo", slug: "wetaulo" },
  { name: "Rateina", slug: "rateina" },
  { name: "Xoorelity", slug: "xoorelity" },
  { name: "Leequify", slug: "leequify" },
];

const GRAIN_SVG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export default function ThesisQuotes() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % theses.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = theses[index];

  return (
    <section style={styles.section}>
      <div style={styles.grain} />
      <div style={styles.inner}>
        <span style={styles.eyebrow}>Investment thesis</span>
        <h2 style={styles.heading}>
        Where the <span style={styles.accentWord}>conviction</span> actually comes from.
        </h2>

        <div style={styles.thesisBlock}>
          <div style={{ ...styles.thesisContent, opacity: visible ? 1 : 0 }}>
            <span style={styles.sector}>{current.sector}</span>
            <p style={styles.line}>{current.line}</p>
          </div>
          <div style={styles.dots}>
            {theses.map((_, i) => (
              <span
                key={i}
                style={{ ...styles.dot, ...(i === index ? styles.dotActive : {}) }}
              />
            ))}
          </div>
        </div>

        <div style={styles.portfolioSection}>
          <p style={styles.portfolioLabel}>Companies we&apos;ve backed</p>
          <div style={styles.logoRow}>
            {companies.map((c) => (
              <div key={c.slug} style={styles.logoItem}>
                <Image
                  src={`/logos/${c.slug}-logo.png`}
                  alt={c.name}
                  width={100}
                  height={32}
                  style={styles.logoImage}
                />
                <p style={styles.logoText}>{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Styles = { [key: string]: React.CSSProperties };

const styles: Styles = {
  section: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  grain: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("${GRAIN_SVG}")`,
    opacity: 0.035,
    mixBlendMode: "multiply",
    pointerEvents: "none",
  },
  inner: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "1200px",
    padding: "var(--page-padding-y) var(--page-padding-x)",
    textAlign: "center",
  },
  eyebrow: {
    display: "inline-block",
    fontSize: "12px",
    fontWeight: 700,
    color: "#5b8cff",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    backgroundColor: "#eef3ff",
    border: "1px solid rgba(91,140,255,0.28)",
    borderRadius: "999px",
    padding: "8px 18px",
    marginBottom: "24px",
  },
  heading: {
    fontSize: "clamp(26px, 3.9vw, 46px)",
    fontWeight: 700,
    color: "#14161a",
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    marginBottom: "56px",
    maxWidth: "680px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  accentWord: {
    fontFamily: "'Iowan Old Style', 'Palatino Linotype', Georgia, serif",
    fontStyle: "italic",
    fontWeight: 900,
    color: "#5b8cff",
  },
  thesisBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "28px",
    minHeight: "160px",
    justifyContent: "center",
  },
  thesisContent: {
    transition: "opacity 0.4s ease",
    maxWidth: "600px",
  },
  sector: {
    display: "inline-block",
    fontSize: "12px",
    fontWeight: 700,
    color: "#5b8cff",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "16px",
  },
  line: {
    fontSize: "22px",
    fontWeight: 500,
    color: "#43464d",
    lineHeight: 1.55,
  },
  dots: {
    display: "flex",
    gap: "8px",
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#e0e0dc",
  },
  dotActive: {
    backgroundColor: "#5b8cff",
  },
  portfolioSection: {
    marginTop: "72px",
  },
  portfolioLabel: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#8a8d94",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "28px",
  },
  logoRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  logoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#8a8d94",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  logoImage: {
    objectFit: "cover",
    filter: "grayscale(100%) opacity(0.55)",
    maxWidth: "40px"
  },
};