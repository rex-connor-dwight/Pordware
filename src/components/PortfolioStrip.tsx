const companies = [
    "ahono",
    "Xeero",
    "Wetaulo",
    "Xooreality",
    "Rateina",
  ];
  
  export default function PortfolioStrip() {
    return (
      <div style={styles.strip}>
        {companies.map((name) => (
          <span key={name} style={styles.name}>
            {name}
          </span>
        ))}
      </div>
    );
  }
  
  type Styles = { [key: string]: React.CSSProperties };
  
  const styles: Styles = {
    strip: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "40px",
    },
    name: {
      fontSize: "15px",
      fontWeight: 600,
      color: "rgba(255,255,255,0.28)",
      whiteSpace: "nowrap",
    },
  };