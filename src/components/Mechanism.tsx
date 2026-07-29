const stages = [
  {
    number: "01",
    title: "Co-build",
    description:
      "We work alongside founders from day one, product, hiring, and go-to-market, not just capital from a distance.",
  },
  {
    number: "02",
    title: "Invest",
    description:
      "We put capital behind the companies we help build, aligned with founders rather than sitting outside the table.",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "We stay in through growth, follow-on capital, operating support, and the connections a startup needs to expand.",
  },
];

export default function Mechanism() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <p style={styles.eyebrow}>How it works</p>
        <h2 style={styles.heading}>
          One firm, three phases, the same founder all the way through.
        </h2>

        <div style={styles.stepper}>
          <div style={styles.connectingLine} />

          {stages.map((s) => (
            <div key={s.number} style={styles.step}>
              <div style={styles.nodeRow}>
                <span style={styles.node}>{s.number}</span>
              </div>

              <div className="sector-card" style={styles.card}>
                <h3 style={styles.title}>{s.title}</h3>
                <p style={styles.description}>{s.description}</p>
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
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f7f7f5",
  },
  inner: {
    width: "100%",
    maxWidth: "1400px",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#5b8cff",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "16px",
  },
  heading: {
    fontSize: "clamp(24px, 3vw, 34px)",
    fontWeight: 700,
    color: "#111111",
    letterSpacing: "-0.01em",
    maxWidth: "640px",
    marginBottom: "64px",
  },
  stepper: {
    position: "relative",
    display: "flex",
    gap: "32px",
    flexWrap: "wrap",
  },
  connectingLine: {
    position: "absolute",
    top: "23px",
    left: "23px",
    right: "23px",
    height: "2px",
    backgroundColor: "rgba(91,140,255,0.25)",
    zIndex: 0,
  },
  step: {
    position: "relative",
    zIndex: 1,
    flex: "1 1 260px",
    minWidth: "240px",
    display: "flex",
    flexDirection: "column",
  },
  nodeRow: {
    marginBottom: "24px",
  },
  node: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    backgroundColor: "#5b8cff",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 700,
  },
  card: {
    border: "1px solid #e5e5e2",
    borderRadius: "16px",
    padding: "28px",
    backgroundColor: "#ffffff",
    cursor: "default",
    flex: 1,
  },
  title: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#111111",
    marginBottom: "12px",
  },
  description: {
    fontSize: "15px",
    color: "#6b6b67",
    lineHeight: 1.6,
  },
};