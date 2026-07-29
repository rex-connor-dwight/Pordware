import BlogHero from "@/components/BlogHero";
import BlogList from "@/components/BlogList";
import ClosingCTA from "@/components/ClosingCTA";
import { getAllPostsMeta } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <BlogHero />
      <BlogList posts={posts} />
      <ClosingCTA />
    </>
  );
}