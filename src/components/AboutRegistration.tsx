const facts = [
    { label: "Legal name", value: "Pordware Venture Partners Ltd" },
    { label: "Registration number", value: "RC 9831120" },
    { label: "Entity type", value: "Private Company Limited by Shares" },
    { label: "Incorporated under", value: "Companies and Allied Matters Act, 2020" },
    { label: "Registered with", value: "Corporate Affairs Commission, Nigeria" },
    { label: "Headquarters", value: "Abuja, Nigeria" },
  ];
  
  export default function AboutRegistration() {
    return (
      <section style={styles.section}>
        <div style={styles.inner}>
          <p style={styles.eyebrow}>Registration</p>
          <h2 style={styles.heading}>A registered company, not just a name.</h2>
  
          <div style={styles.grid}>
            {facts.map((f) => (
              <div key={f.label} style={styles.factRow}>
                <span style={styles.factLabel}>{f.label}</span>
                <span style={styles.factValue}>{f.value}</span>
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
    eyebrow: {
      fontSize: "12px",
      fontWeight: 600,
      color: "#5b8cff",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginBottom: "16px",
    },
    heading: {
      fontSize: "clamp(22px, 2.8vw, 30px)",
      fontWeight: 700,
      color: "#111111",
      letterSpacing: "-0.01em",
      marginBottom: "48px",
      maxWidth: "600px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "32px",
    },
    factRow: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      paddingTop: "16px",
      borderTop: "1px solid #ececea",
    },
    factLabel: {
      fontSize: "11px",
      fontWeight: 600,
      color: "#8f8f8c",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
    factValue: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#111111",
    },
  };