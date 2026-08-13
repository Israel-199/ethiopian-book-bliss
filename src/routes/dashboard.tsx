import { createFileRoute, Link } from "@tanstack/react-router";
import { books, blogPosts } from "@/lib/content";
import { useAccess } from "@/lib/access";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "የእኔ መጻሕፍት — Berhan Dashboard" },
      { name: "description", content: "የተፈቀዱልዎ መጻሕፍትና ፈቃድ የሚጠብቁ ትዕዛዞች።" },
      { property: "og:title", content: "የእኔ መጻሕፍት — Berhan Dashboard" },
      { property: "og:description", content: "የተፈቀዱልዎ መጻሕፍትና ፈቃድ የሚጠብቁ ትዕዛዞች።" },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const { state, grant, revoke } = useAccess();
  const mine = books.filter((b) => state[b.id]);
  const post = blogPosts[0];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex items-center gap-3 mb-12">
        <div className="size-12 rounded-full bg-primary/10 grid place-items-center text-primary font-bold">
          ዮ
        </div>
        <div>
          <h1 className="text-2xl font-bold">የእኔ መጻሕፍት (Dashboard)</h1>
          <p className="text-xs uppercase tracking-tighter text-muted-foreground">
            የተፈቀዱልዎ ይዘቶች
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mine.map((book) =>
          state[book.id] === "granted" ? (
            <div
              key={book.id}
              className="p-6 border border-primary/20 rounded-sm bg-card relative group"
            >
              <div className="absolute top-4 right-4 text-success text-[10px] font-bold uppercase flex items-center gap-1">
                <span className="size-2 bg-success rounded-full animate-pulse" /> ተፈቅዷል
              </div>
              <h2 className="font-bold mb-2">{book.title}</h2>
              <p className="text-xs text-muted-foreground mb-6">ሙሉ ይዘቱን ለማንበብ ዝግጁ ነው።</p>
              <Link
                to="/books/$bookId"
                params={{ bookId: book.id }}
                className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                ንባቡን ቀጥል →
              </Link>
              <button
                onClick={() => revoke(book.id)}
                className="block mt-6 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-destructive cursor-pointer"
              >
                አድሚን: ፈቃድ አንሳ
              </button>
            </div>
          ) : (
            <div key={book.id} className="p-6 border border-foreground/5 rounded-sm bg-muted/40">
              <div className="text-pending text-[10px] font-bold uppercase mb-3">
                ፈቃድ ይጠብቃል (Pending)
              </div>
              <h2 className="font-bold mb-2">{book.title}</h2>
              <p className="text-xs text-muted-foreground mb-6">አድሚን ክፍያዎን እያረጋገጠ ነው።</p>
              <div className="h-1 bg-muted rounded-full overflow-hidden mb-6">
                <div className="w-1/3 h-full bg-pending" />
              </div>
              <button
                onClick={() => grant(book.id)}
                className="text-[10px] uppercase tracking-widest text-primary font-bold cursor-pointer"
              >
                አድሚን: ፈቃድ ስጥ
              </button>
            </div>
          ),
        )}

        <div className="p-6 border-2 border-dashed border-primary/10 rounded-sm flex flex-col justify-center items-center text-center">
          <p className="text-xs font-bold uppercase mb-2 text-secondary">አዲስ ብሎግ</p>
          <h2 className="font-bold mb-4">{post.title}</h2>
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="text-xs border-b border-foreground/20 pb-1"
          >
            ተጨማሪ ያንብቡ
          </Link>
        </div>
      </div>
    </section>
  );
}
