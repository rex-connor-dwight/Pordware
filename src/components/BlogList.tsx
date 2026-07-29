import Link from "next/link";
import Image from "next/image";
import { BlogPostMeta } from "@/lib/blog";

export default function BlogList({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        {posts.length === 0 && <p style={styles.empty}>No posts yet.</p>}

        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={styles.row}>
            <div style={styles.imageWrap}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={styles.image}
              />
            </div>

            <div style={styles.textBlock}>
              <span style={styles.date}>{post.date}</span>
              <h3 style={styles.title}>{post.title}</h3>
              <p style={styles.summary}>{post.summary}</p>
            </div>
          </Link>
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
    maxWidth: "900px",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
  empty: {
    fontSize: "15px",
    color: "#8f8f8c",
  },
  row: {
    display: "flex",
    gap: "28px",
    padding: "32px 0",
    borderBottom: "1px solid #ececea",
    textDecoration: "none",
    flexWrap: "wrap",
  },
  imageWrap: {
    position: "relative",
    width: "180px",
    aspectRatio: "7 / 3",
    borderRadius: "4px",
    overflow: "hidden",
    backgroundColor: "#f0f0ee",
    flexShrink: 0,
  },
  image: {
    objectFit: "cover",
  },
  textBlock: {
    flex: "1 1 320px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  date: {
    fontSize: "13px",
    color: "#a8a8a4",
    marginBottom: "8px",
  },
  title: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#111111",
    marginBottom: "8px",
  },
  summary: {
    fontSize: "14px",
    color: "#6b6b67",
    lineHeight: 1.6,
  },
};