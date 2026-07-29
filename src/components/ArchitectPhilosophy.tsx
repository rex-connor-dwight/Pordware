const principles = [
  {
    number: "01",
    title: "Validation before execution",
    line: "Every assumption deserves evidence before investment.",
    description:
      "Confidence should come from market evidence, not intuition. Founders validate before they write code, raise capital, or scale.",
  },
  {
    number: "02",
    title: "Build from understanding",
    line: "The best products are built by those who understand the problem deeply.",
    description:
      "Founders shouldn't build for industries they don't understand. They immerse in the market, speak with customers, observe workflows, and uncover real pain points before designing solutions.",
  },
  {
    number: "03",
    title: "Design for longevity",
    line: "Build ventures that endure, not products that impress.",
    description:
      "This is venture architecture, not software. Business model, execution, fundraising readiness, market fit, and sustainable growth, designing companies, not just products.",
  },
];

export default function ArchitectPhilosophy() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <p style={styles.eyebrow}>Operating principles</p>

        <div style={styles.list}>
          {principles.map((p) => (
            <div key={p.number} style={styles.row}>
              <span style={styles.number}>{p.number}</span>

              <div style={styles.content}>
                <h3 style={styles.title}>{p.title}</h3>
                <p style={styles.line}>{p.line}</p>
                <p style={styles.description}>{p.description}</p>
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
    backgroundColor: "#ffffff",
  },
  inner: {
    width: "100%",
    maxWidth: "900px",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#5b8cff",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "48px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    gap: "32px",
    padding: "48px 0",
    borderTop: "1px solid #ececea",
  },
  number: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#c8c8c4",
    minWidth: "32px",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: "clamp(22px, 2.8vw, 30px)",
    fontWeight: 700,
    color: "#111111",
    letterSpacing: "-0.01em",
    marginBottom: "12px",
  },
  line: {
    fontSize: "17px",
    fontWeight: 500,
    fontStyle: "italic",
    color: "#5b8cff",
    lineHeight: 1.5,
    marginBottom: "16px",
  },
  description: {
    fontSize: "15px",
    color: "#6b6b67",
    lineHeight: 1.7,
    maxWidth: "560px",
  },
};