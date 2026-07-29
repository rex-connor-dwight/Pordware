import Header from "./Header";

export default function PitchExplainer() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <Header />
        <div style={styles.content}>
          <p style={styles.eyebrow}>Pitch to us</p>
          <h1 style={styles.heading}>
            We review pitches through Xeero, not this site.
          </h1>
          <p style={styles.description}>
            Xeero is a Pordware portfolio company built for exactly this,
            set up your founder profile, attach your pitch deck, and submit
            directly to us. It takes a few minutes, and it's how every
            founder gets in front of Pordware.
          </p>
          
          <a  href="https://xeero.me"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Continue to Xeero ↗
          </a>
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
    minHeight: "100vh",
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
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "640px",
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
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: 700,
    color: "#f5f6f8",
    lineHeight: 1.3,
    letterSpacing: "-0.02em",
    marginBottom: "20px",
  },
  description: {
    fontSize: "16px",
    color: "#b7bfd4",
    lineHeight: 1.6,
    marginBottom: "32px",
  },
  button: {
    display: "inline-block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#0b0d16",
    backgroundColor: "#ffffff",
    padding: "14px 28px",
    borderRadius: "999px",
    textDecoration: "none",
    width: "fit-content",
  },
};