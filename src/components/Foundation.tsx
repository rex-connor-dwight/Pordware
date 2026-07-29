import Header from "./Header";
import CyclingWord from "./CyclingWord";
import AmbientGlow from "./AmbientGlow";

const stats = [
  { label: "Founded", value: "2024" },
  { label: "Headquarters", value: "Abuja, Nigeria" },
  { label: "Focus sectors", value: "5" },
  { label: "Structure", value: "Venture Firm" },
];

export default function Foundation() {
  return (
    <section style={styles.section}>
      <AmbientGlow />
      <div style={styles.inner}>
        <Header />

        <div style={styles.hero}>
          <span style={styles.tag}>Pordware Ventures</span>

          <h1 style={styles.headline}>
            We <CyclingWord /> the companies
            <br />
            Africa's economy will run on.
          </h1>

          <p style={styles.subline}>
            Pordware is a venture firm that co-builds, invests in, and
            scales African startups across fintech, mobility, proptech,
            health tech, and agritech.
          </p>

          <div style={styles.buttonRow}>
            <a href="/portfolio" style={styles.solidButton}>
              See our portfolio
            </a>
            <a href="/pitch" style={styles.outlineButton}>
              Pitch to us
            </a>
          </div>
        </div>

        <div style={styles.statBar}>
          {stats.map((s, i) => (
            <div key={s.label} style={styles.statItem}>
              {i > 0 && <span style={styles.divider} />}
              <div style={styles.statText}>
                <span style={styles.statLabel}>{s.label}</span>
                <span style={styles.statValue}>{s.value}</span>
              </div>
            </div>
          ))}
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
    backgroundColor: "#0a0d16",
    overflow: "hidden",
  },
  inner: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "1400px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
  hero: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "760px",
    padding: "60px 0 40px",
  },
  tag: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#5b8cff",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "24px",
  },
  headline: {
    fontSize: "clamp(32px, 4.8vw, 58px)",
    fontWeight: 700,
    color: "#f5f6f8",
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    marginBottom: "26px",
  },
  subline: {
    fontSize: "16px",
    color: "#a7aec2",
    lineHeight: 1.7,
    maxWidth: "520px",
    marginBottom: "32px",
  },
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
  solidButton: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#0a0d16",
    backgroundColor: "#ffffff",
    padding: "12px 22px",
    borderRadius: "6px",
    textDecoration: "none",
  },
  outlineButton: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#f5f6f8",
    border: "1px solid rgba(255,255,255,0.25)",
    padding: "12px 22px",
    borderRadius: "6px",
    textDecoration: "none",
  },
  statBar: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "28px",
  },
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
  },
  divider: {
    width: "1px",
    height: "28px",
    backgroundColor: "rgba(255,255,255,0.12)",
  },
  statText: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  statLabel: {
    fontSize: "11px",
    fontWeight: 600,
    color: "#6b7280",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  statValue: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#f5f6f8",
  },
};