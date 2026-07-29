export default function AmbientGlow() {
    return (
      <div style={styles.wrapper} aria-hidden="true">
        <div style={{ ...styles.blob, ...styles.blobOne }} />
        <div style={{ ...styles.blob, ...styles.blobTwo }} />
      </div>
    );
  }
  
  type Styles = { [key: string]: React.CSSProperties };
  
  const styles: Styles = {
    wrapper: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
    },
    blob: {
      position: "absolute",
      borderRadius: "50%",
      filter: "blur(90px)",
    },
    blobOne: {
      width: "520px",
      height: "520px",
      top: "-120px",
      right: "-80px",
      background: "radial-gradient(circle, rgba(91,140,255,0.35) 0%, rgba(91,140,255,0) 70%)",
      animation: "driftOne 16s ease-in-out infinite alternate",
    },
    blobTwo: {
      width: "420px",
      height: "420px",
      bottom: "-100px",
      right: "180px",
      background: "radial-gradient(circle, rgba(150,100,255,0.22) 0%, rgba(150,100,255,0) 70%)",
      animation: "driftTwo 20s ease-in-out infinite alternate",
    },
  };