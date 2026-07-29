const values = [
    {
      title: "African conditions first",
      description:
        "We start from how markets here actually work, not a template built for somewhere else.",
    },
    {
      title: "Aligned, not distant",
      description:
        "We build and invest alongside founders, our incentives move with theirs.",
    },
    {
      title: "In for the whole arc",
      description:
        "From raw idea through to scale, we don't hand off and disappear.",
    },
  ];
  
  export default function AboutValues() {
    return (
      <section style={styles.section}>
        <div style={styles.inner}>
          <p style={styles.eyebrow}>What we stand for</p>
          <div style={styles.list}>
            {values.map((v) => (
              <div key={v.title} style={styles.row}>
                <h3 style={styles.title}>{v.title}</h3>
                <p style={styles.description}>{v.description}</p>
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
      backgroundColor: "#f7f7f5",
    },
    inner: {
      width: "100%",
      maxWidth: "1400px",
      padding: "var(--page-padding-y) var(--page-padding-x)",
    },
    eyebrow: {
      fontSize: "12px",
      fontWeight: 600,
      color: "#8f8f8c",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginBottom: "40px",
    },
    list: {
      display: "flex",
      flexDirection: "column",
    },
    row: {
      padding: "28px 0",
      borderBottom: "1px solid #e5e5e2",
    },
    title: {
      fontSize: "20px",
      fontWeight: 700,
      color: "#111111",
      marginBottom: "8px",
    },
    description: {
      fontSize: "15px",
      color: "#6b6b67",
      lineHeight: 1.6,
      maxWidth: "560px",
    },
  };