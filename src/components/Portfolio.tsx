const companies = [
  {
    name: "Xeero",
    sector: "SaaS",
    description:
      "One link for founders that holds everything an investor needs, startup overview, team, pitch deck, data room, and deal terms.",
  },
  {
    name: "GM1000",
    sector: "Smart Infrastructure",
    description:
      "Smart gas hardware for monitoring pressure and safety, connected to a marketplace linking households with gas vendors.",
  },
  {
    name: "Ahono",
    sector: "Health Tech",
    description:
      "On-demand pharmaceutical procurement with smart pharmacy routing, ordering medicine from wherever it's actually in stock.",
  },
  {
    name: "Wetaulo",
    sector: "Proptech",
    description:
      "Rental discovery and financing infrastructure built for the realities of the African housing market.",
  },
  {
    name: "Rateina",
    sector: "Entertainment Tech",
    description:
      "Entertainment discovery and data insight, helping people find what's actually happening and worth attending.",
  },
  {
    name: "Xooreality",
    sector: "Proptech",
    description:
      "Revenue optimization for shortlet and Airbnb-style infrastructure through smarter, data-driven management.",
  },
];

export default function Portfolio() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        {companies.map((c, i) => (
          <div key={c.name} style={styles.row}>
            <span style={styles.index}>
              {String(i + 1).padStart(2, "0")}
            </span>

            <div style={styles.textBlock}>
              <h3 style={styles.name}>{c.name}</h3>
              <p style={styles.description}>{c.description}</p>
            </div>

            <span style={styles.sector}>{c.sector}</span>
          </div>
        ))}
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
    maxWidth: "1400px",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
  row: {
    display: "flex",
    alignItems: "baseline",
    gap: "32px",
    padding: "40px 0",
    borderBottom: "1px solid #ececea",
    flexWrap: "wrap",
  },
  index: {
    fontSize: "13px",
    fontWeight: 500,
    color: "#c8c8c4",
    minWidth: "24px",
  },
  textBlock: {
    flex: "1 1 380px",
  },
  name: {
    fontSize: "clamp(28px, 3.4vw, 44px)",
    fontWeight: 700,
    color: "#111111",
    letterSpacing: "-0.01em",
    marginBottom: "10px",
  },
  description: {
    fontSize: "15px",
    color: "#6b6b67",
    lineHeight: 1.6,
    maxWidth: "560px",
  },
  sector: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#5b8cff",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
};