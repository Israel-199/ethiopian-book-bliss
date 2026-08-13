import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "ብሎግ — Berhan" },
      { name: "description", content: "ወቅታዊ መንፈሳዊ ጽሑፎችና ትንታኔዎች።" },
      { property: "og:title", content: "ብሎግ — Berhan" },
      { property: "og:description", content: "ወቅታዊ መንፈሳዊ ጽሑፎችና ትንታኔዎች።" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="text-4xl font-bold mb-2">ብሎግ</h1>
      <p className="text-muted-foreground mb-12">ወቅታዊ መንፈሳዊ ጽሑፎች</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <article key={post.slug}>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
              {post.date}
            </p>
            <h2 className="text-xl font-bold mb-3">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
