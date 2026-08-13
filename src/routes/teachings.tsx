import { createFileRoute } from "@tanstack/react-router";
import { audioTeachings } from "@/lib/content";

export const Route = createFileRoute("/teachings")({
  head: () => ({
    meta: [
      { title: "መሠረታዊ ክርስቲያናዊ ትምህርቶች — Berhan" },
      {
        name: "description",
        content: "በጽሑፍና በድምፅ የተዘጋጁ መሠረታዊ ክርስቲያናዊ ትምህርቶች።",
      },
      { property: "og:title", content: "መሠረታዊ ክርስቲያናዊ ትምህርቶች — Berhan" },
      { property: "og:description", content: "በጽሑፍና በድምፅ የተዘጋጁ ትምህርቶች።" },
    ],
  }),
  component: TeachingsPage,
});

function TeachingsPage() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="text-4xl font-bold mb-2">መሠረታዊ ክርስቲያናዊ ትምህርቶች</h1>
      <p className="text-muted-foreground mb-12">በጽሑፍና በድምፅ የተዘጋጁ ትምህርቶች</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {audioTeachings.map((t) => (
          <div
            key={t.id}
            className="p-6 bg-card border border-primary/10 rounded-sm flex items-center justify-between gap-6"
          >
            <div>
              <h2 className="font-bold mb-1">{t.title}</h2>
              <p className="text-sm text-muted-foreground">
                {t.teacher} · {t.duration}
              </p>
            </div>
            <button className="shrink-0 size-12 rounded-full bg-primary text-primary-foreground font-bold cursor-pointer hover:bg-secondary transition-colors">
              ▶
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
