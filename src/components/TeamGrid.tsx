import Image from "next/image";

const team = [
  {
    name: "Rex Connor Dwight",
    role: "Venture Partner",
    bio: "Screens founders, refines the idea, and prepares companies for funding before capital moves.",
    photo: "/team/rex-connor-dwight.jpg",
  },
  {
    name: "Zayyad Mohammed",
    role: "Capital Partner",
    bio: "Structures deals, allocates capital, and manages investor relations across the portfolio.",
    photo: "/team/zayyad-mohammed.jpg",
  },
];

export default function TeamGrid() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.grid}>
          {team.map((t) => (
            <div key={t.name} style={styles.card}>
              <div style={styles.photoWrap}>
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  style={styles.photo}
                />
              </div>
              <h3 style={styles.name}>{t.name}</h3>
              <p style={styles.role}>{t.role}</p>
              <p style={styles.bio}>{t.bio}</p>
            </div>
          ))}
        </div>

        <p style={styles.networkNote}>
          Alongside a wider network of advisors and operators who prefer to
          stay behind the scenes.
        </p>
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "56px",
    marginBottom: "56px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  photoWrap: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 5",
    borderRadius: "16px",
    overflow: "hidden",
    backgroundColor: "#f0f0ee",
    marginBottom: "24px",
  },
  photo: {
    objectFit: "cover",
    filter: "grayscale(15%)",
  },
  name: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#111111",
    marginBottom: "4px",
  },
  role: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#5b8cff",
    marginBottom: "12px",
  },
  bio: {
    fontSize: "14px",
    color: "#6b6b67",
    lineHeight: 1.6,
  },
  networkNote: {
    fontSize: "13px",
    color: "#a8a8a4",
    textAlign: "center",
    borderTop: "1px solid #ececea",
    paddingTop: "28px",
  },
};