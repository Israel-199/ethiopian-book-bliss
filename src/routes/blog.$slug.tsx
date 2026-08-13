import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "አልተገኘም — Berhan" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Berhan ብሎግ` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} — Berhan ብሎግ` },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <article className="max-w-3xl mx-auto px-8 py-20">
      <Link
        to="/blog"
        className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary"
      >
        ← ወደ ብሎግ
      </Link>
      <p className="text-xs font-bold uppercase tracking-widest text-secondary mt-8 mb-3">
        {post.date}
      </p>
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="space-y-6 text-lg leading-relaxed">
        {post.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </article>
  );
}
