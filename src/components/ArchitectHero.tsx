import Header from "./Header";

export default function ArchitectHero() {
  return (
    <section className="architect-bg" style={styles.section}>
      <div style={styles.inner}>
        <Header />

        <div style={styles.content}>
          <p style={styles.eyebrow}>Venture Partner</p>
          <h1 style={styles.heading}>
            &ldquo;Ideas don&apos;t fail because they&apos;re bad. They fail
            most times because they were never validated.&rdquo;
          </h1>
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
    backgroundColor: "#0b0d16",
    backgroundImage: "url('/images/architect-bg.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "80vh",
  },
  inner: {
    width: "100%",
    maxWidth: "1400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "560px",
    marginLeft: "auto",
    textAlign: "right",
  },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#5b8cff",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "clamp(22px, 3.2vw, 34px)",
    fontWeight: 600,
    fontStyle: "italic",
    color: "#f5f6f8",
    lineHeight: 1.4,
    letterSpacing: "-0.01em",
  },
};