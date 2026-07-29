import { getAllPostSlugs } from "@/lib/blog";

const BASE_URL = "https://pordware.com";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/portfolio",
    "/team",
    "/architect",
    "/blog",
    "/pitch",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllPostSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes];
}
