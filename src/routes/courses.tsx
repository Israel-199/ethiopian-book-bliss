import { createFileRoute } from "@tanstack/react-router";
import { courses } from "@/lib/content";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "መንፈሳዊ ሥልጠናዎች — Berhan" },
      { name: "description", content: "የመንፈሳዊ ሥልጠናና ኮርሶች ዝርዝር — ከጀማሪ እስከ ላቀ ደረጃ።" },
      { property: "og:title", content: "መንፈሳዊ ሥልጠናዎች — Berhan" },
      { property: "og:description", content: "ከጀማሪ እስከ ላቀ ደረጃ የተዘጋጁ ኮርሶች።" },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="text-4xl font-bold mb-2">መንፈሳዊ ሥልጠና / ኮርሶች</h1>
      <p className="text-muted-foreground mb-12">በደረጃ የተከፋፈሉ ተከታታይ ትምህርቶች</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((c) => (
          <div key={c.id} className="p-8 bg-card border border-primary/10 rounded-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              {c.level}
            </span>
            <h2 className="text-xl font-bold mt-3 mb-3">{c.title}</h2>
            <p className="text-sm text-muted-foreground mb-6">{c.description}</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {c.lessons} ትምህርቶች
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
