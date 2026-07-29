export default function AboutStory() {
    return (
      <section style={styles.section}>
        <div style={styles.inner}>
          <div style={styles.row}>
            <p style={styles.label}>Our story</p>
            <div style={styles.text}>
              <p style={styles.paragraph}>
                Pordware started from a simple observation: Africa's core
                infrastructure, money, movement, housing, health, and food, is
                still being built, and it won't be built by companies designed
                for someone else's market and lightly adapted for ours.
              </p>
              <p style={styles.paragraph}>
                We're based in Abuja, and we work across fintech, mobility,
                proptech, health tech, and agritech, backing founders who
                understand African conditions well enough to solve problems
                global platforms either ignore or get wrong.
              </p>
              <p style={styles.paragraph}>
                We don't just write checks. We co-build alongside founders,
                invest in the companies we help shape, and stay in through
                scale, from the earliest idea to a company that defines its
                category.
              </p>
            </div>
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
    row: {
      display: "flex",
      gap: "60px",
      flexWrap: "wrap",
    },
    label: {
      fontSize: "12px",
      fontWeight: 600,
      color: "#8f8f8c",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      minWidth: "140px",
    },
    text: {
      flex: "1 1 480px",
      maxWidth: "640px",
    },
    paragraph: {
      fontSize: "17px",
      color: "#444440",
      lineHeight: 1.7,
      marginBottom: "24px",
    },
  };