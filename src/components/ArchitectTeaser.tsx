import Link from "next/link";

const responsibilities = ["Screens founders", "Refines the idea", "Prepares for funding"];

export default function ArchitectTeaser() {
  return (
    <section className="architect-bg" style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.content}>
          <p style={styles.eyebrow}>Venture Partner</p>
          <h2 style={styles.heading}>
            The first conversation founders have with Pordware.
          </h2>
          <p style={styles.description}>
            Every founder we back starts here, screened, coached, and
            prepared before capital ever moves. Investment itself sits
            with Pordware, but the relationship starts with one person
            in the room.
          </p>

          <div style={styles.tagRow}>
            {responsibilities.map((r) => (
              <span key={r} style={styles.tag}>
                {r}
              </span>
            ))}
          </div>

          <Link href="/architect" style={styles.link}>
            Meet the partner →
          </Link>
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
    minHeight: "600px",
  },
  inner: {
    width: "100%",
    maxWidth: "1400px",
    display: "flex",
    alignItems: "center",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
  content: {
    maxWidth: "700px",
    marginLeft: "auto",
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
    color: "#f5f6f8",
    letterSpacing: "-0.01em",
    marginBottom: "18px",
  },
  description: {
    fontSize: "16px",
    color: "#b7bfd4",
    lineHeight: 1.6,
    marginBottom: "24px",
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "28px",
  },
  tag: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#a7aec2",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "999px",
    padding: "6px 14px",
  },
  link: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#ffffff",
    textDecoration: "none",
    borderBottom: "1px solid rgba(255,255,255,0.4)",
    paddingBottom: "2px",
  },
};