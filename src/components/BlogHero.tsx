import Header from "./Header";

export default function BlogHero() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <Header />
        <div style={styles.content}>
          <p style={styles.eyebrow}>Blog</p>
          <h1 style={styles.heading}>Notes from the firm.</h1>
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
    background:
      "linear-gradient(160deg, #05060a 0%, #0b0d16 35%, #142654 68%, #1c3fae 100%)",
  },
  inner: {
    width: "100%",
    maxWidth: "1400px",
    display: "flex",
    flexDirection: "column",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
  content: {
    padding: "80px 0 60px",
    maxWidth: "780px",
  },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#9fb2e0",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "clamp(28px, 4.5vw, 48px)",
    fontWeight: 700,
    color: "#f5f6f8",
    lineHeight: 1.3,
    letterSpacing: "-0.02em",
  },
};