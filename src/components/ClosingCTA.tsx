import Link from "next/link";
import Logo from "./Logo";

const productLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

const companyLinks = [
  { label: "Team", href: "/team" },
  { label: "Architect", href: "/architect" },
  { label: "Pitch to us", href: "/pitch" },
];

export default function ClosingCTA() {
  return (
    <section style={styles.section}>
      <div style={styles.ctaBlock}>
        <p style={styles.eyebrow}>Building something?</p>
        <h2 style={styles.heading}>
          Let&apos;s build the parts nobody imported correctly.
        </h2>
        <p style={styles.description}>
          If you&apos;re solving a real problem in fintech, mobility,
          proptech, health tech, or agritech, we want to hear it.
        </p>
        <Link href="/pitch" style={styles.button}>
          Pitch to us ↗
        </Link>
      </div>

      <div style={styles.footerCard}>
        <div style={styles.footerTop}>
          <div style={styles.brandColumn}>
            <Logo color="#111111" size={15} />
            <p style={styles.tagline}>
              A venture firm that co-builds, invests in, and scales African
              startups.
            </p>
          </div>

          <div style={styles.linkColumn}>
            <span style={styles.columnLabel}>Company</span>
            {productLinks.map((l) => (
              <Link key={l.href} href={l.href} style={styles.footerLink}>
                {l.label}
              </Link>
            ))}
          </div>

          <div style={styles.linkColumn}>
            <span style={styles.columnLabel}>Firm</span>
            {companyLinks.map((l) => (
              <Link key={l.href} href={l.href} style={styles.footerLink}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={styles.divider} />

        <div style={styles.footerBottom}>
          <span style={styles.copyright}>
            © {new Date().getFullYear()} Pordware Venture Partners Ltd. All rights reserved.
          </span>
          <span style={styles.location}>Abuja, Nigeria</span>
        </div>
      </div>

      <div style={styles.wordmarkWrap}>
        <span style={styles.wordmark}>PORDWARE</span>
      </div>
    </section>
  );
}

type Styles = { [key: string]: React.CSSProperties };

const styles: Styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  ctaBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#8f8f8c",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "16px",
  },
  heading: {
    fontSize: "clamp(26px, 4vw, 44px)",
    fontWeight: 700,
    color: "#111111",
    letterSpacing: "-0.01em",
    maxWidth: "700px",
    marginBottom: "20px",
  },
  description: {
    fontSize: "16px",
    color: "#6b6b67",
    lineHeight: 1.6,
    maxWidth: "480px",
    marginBottom: "32px",
  },
  button: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#ffffff",
    backgroundColor: "#111111",
    padding: "14px 28px",
    borderRadius: "999px",
    textDecoration: "none",
  },
  footerCard: {
    maxWidth: "1200px",
    width: "calc(100% - var(--page-padding-x) * 2)",
    margin: "40px auto 0",
    padding: "48px",
  },
  footerTop: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px",
  },
  brandColumn: {
    flex: "1 1 260px",
    maxWidth: "320px",
  },
  tagline: {
    fontSize: "14px",
    color: "#6b6b67",
    lineHeight: 1.6,
    marginTop: "16px",
  },
  linkColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minWidth: "140px",
  },
  columnLabel: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#111111",
    marginBottom: "6px",
  },
  footerLink: {
    fontSize: "13px",
    color: "#8f8f8c",
    textDecoration: "none",
  },
  divider: {
    height: "1px",
    backgroundColor: "#ececea",
    margin: "40px 0 24px",
  },
  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
  },
  copyright: {
    fontSize: "12px",
    color: "#a8a8a4",
  },
  location: {
    fontSize: "12px",
    color: "#a8a8a4",
  },
  wordmarkWrap: {
    overflow: "hidden",
    lineHeight: 0,
  },
  wordmark: {
    display: "block",
    fontSize: "clamp(90px, 18vw, 260px)",
    fontWeight: 900,
    color: "#e5e5e2",
    letterSpacing: "-0.02em",
    textAlign: "center",
    width: "100%",
    transform: "translateY(28%)",
    userSelect: "none",
  },
};