const companies = [
  {
    name: "Xeero",
    sector: "SaaS",
    stage: "Scaling",
    description:
      "One link for founders that holds everything an investor needs, startup overview, team, pitch deck, data room, and deal terms.",
  },
  {
    name: "GM1000",
    sector: "Smart Infrastructure",
    stage: "Building",
    description:
      "Smart gas hardware for monitoring pressure and safety, connected to a marketplace linking households with gas vendors.",
  },
  {
    name: "Ahono",
    sector: "Health Tech",
    stage: "Scaling",
    description:
      "On-demand pharmaceutical procurement with smart pharmacy routing, ordering medicine from wherever it's actually in stock.",
  },
  {
    name: "Wetaulo",
    sector: "Proptech",
    stage: "Building",
    description:
      "Rental discovery and financing infrastructure built for the realities of the African housing market.",
  },
  {
    name: "Rateina",
    sector: "Entertainment Tech",
    stage: "Exited",
    description:
      "Entertainment discovery and data insight, helping people find what's actually happening and worth attending.",
  },
  {
    name: "Xoorelity",
    sector: "Proptech",
    stage: "Building",
    description:
      "Revenue optimization for shortlet and Airbnb-style infrastructure through smarter, data-driven management.",
  },
  {
    name: "Leequify",
    sector: "Proptech",
    stage: "Scaling",
    description:
      "Turning land and property into accessible liquidity for Nigerian owners, through outright acquisition and collateral-backed loans.",
  },
];

export default function PortfolioGrid() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.grid}>
          {companies.map((c) => (
            <div key={c.name} style={styles.card}>
              <div style={styles.tagRow}>
                <span style={styles.sector}>{c.sector}</span>
                <span style={styles.stage}>{c.stage}</span>
              </div>
              <h3 style={styles.name}>{c.name}</h3>
              <p style={styles.description}>{c.description}</p>
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
    maxWidth: "1400px",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  card: {
    border: "1px solid #ececea",
    borderRadius: "12px",
    padding: "32px",
  },
  tagRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "18px",
    flexWrap: "wrap",
  },
  sector: {
    fontSize: "11px",
    fontWeight: 600,
    color: "#5b8cff",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  stage: {
    fontSize: "11px",
    fontWeight: 600,
    color: "#8f8f8c",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  name: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#111111",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#6b6b67",
    lineHeight: 1.6,
  },
};