import Header from "@/components/Header";
import ClosingCTA from "@/components/ClosingCTA";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: `${post.title} — Pordware`,
      description: post.summary,
      keywords: post.tags,
      openGraph: {
        title: post.title,
        description: post.summary,
        url: `https://pordware.org/blog/${slug}`,
        siteName: "Pordware",
        type: "article",
        images: [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.summary,
        images: [post.image],
      },
    };
  } catch {
    return { title: "Post not found — Pordware" };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <section style={styles.heroSection}>
        <div style={styles.heroInner}>
          <Header variant="dark" />
          <div style={styles.heroContent}>
            <span style={styles.date}>{post!.date}</span>
            <h1 style={styles.title}>{post!.title}</h1>
          </div>
        </div>
      </section>

      <section style={styles.bodySection}>
        <div
          className="blog-content"
          style={styles.bodyInner}
          dangerouslySetInnerHTML={{ __html: post!.contentHtml }}
        />
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post!.title,
            description: post!.summary,
            image: `https://pordware.org${post!.image}`,
            datePublished: post!.date,
            keywords: post!.tags.join(", "),
            author: {
              "@type": "Organization",
              name: "Pordware",
            },
            publisher: {
              "@type": "Organization",
              name: "Pordware",
            },
          }),
        }}
      />
    </>
  );
}

type Styles = { [key: string]: React.CSSProperties };

const styles: Styles = {
  heroSection: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f6f4ef",
  },
  heroInner: {
    width: "100%",
    maxWidth: "1400px",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
  heroContent: {
    padding: "60px 0 20px",
    maxWidth: "780px",
  },
  date: {
    fontSize: "13px",
    color: "#8a8d78",
    marginBottom: "16px",
    display: "block",
  },
  title: {
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 700,
    color: "#14161a",
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },
  bodySection: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  bodyInner: {
    width: "100%",
    maxWidth: "720px",
    padding: "var(--page-padding-y) var(--page-padding-x)",
  },
};