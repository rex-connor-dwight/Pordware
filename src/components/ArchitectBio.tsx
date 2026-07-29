const credentials = [
  "3x Startup Founder",
  "Venture Partner",
  "Growth Advisor",
  "Philosophy & Therapy, Australia Open University",
];

export default function ArchitectBio() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.header}>
          <h2 style={styles.name}>Rex Connor Dwight</h2>
          <p style={styles.title}>Professionally known as The Venture Architect</p>

          <div style={styles.tagRow}>
            {credentials.map((c) => (
              <span key={c} style={styles.tag}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div style={styles.body}>
          <p style={styles.paragraph}>
            Connor is a venture architect, startup founder, and strategic
            advisor who helps founders transform early-stage ideas into
            scalable, investment-ready businesses. With a background in
            philosophy and therapy, he brings a unique blend of critical
            thinking, human behavior, and venture strategy to company
            building.
          </p>

          <p style={styles.paragraph}>
            A three-time startup founder, Connor has spent the last several
            years working alongside entrepreneurs across product
            development, venture design, fundraising readiness,
            go-to-market strategy, and business growth. His work spans
            multiple industries, where he has helped founders validate
            ideas, refine business models, build products that solve real
            problems, and position their companies for long-term success.
          </p>

          <blockquote style={styles.pullQuote}>
            &ldquo;Successful startups are not built on great ideas alone,
            but on disciplined validation, thoughtful execution, and a
            deep understanding of the market.&rdquo;
          </blockquote>

          <p style={styles.paragraph}>
            Beyond building ventures of his own, Connor has served as a
            venture partner, growth advisor, and mentor, supporting
            founders through some of the most challenging stages of
            building a company. Today, he works with founders, startups,
            and venture studios to design businesses that are not only
            innovative, but built to endure.
          </p>
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
  header: {
    marginBottom: "48px",
  },
  name: {
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: 700,
    color: "#111111",
    letterSpacing: "-0.01em",
    marginBottom: "8px",
  },
  title: {
    fontSize: "16px",
    color: "#5b8cff",
    fontWeight: 600,
    marginBottom: "28px",
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  tag: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#6b6b67",
    border: "1px solid #e5e5e2",
    borderRadius: "999px",
    padding: "6px 14px",
  },
  body: {
    display: "flex",
    flexDirection: "column",
  },
  paragraph: {
    fontSize: "17px",
    color: "#444440",
    lineHeight: 1.75,
    marginBottom: "28px",
  },
  pullQuote: {
    fontSize: "clamp(20px, 2.6vw, 26px)",
    fontWeight: 600,
    fontStyle: "italic",
    color: "#111111",
    lineHeight: 1.5,
    borderLeft: "3px solid #5b8cff",
    paddingLeft: "24px",
    margin: "40px 0",
  },
};