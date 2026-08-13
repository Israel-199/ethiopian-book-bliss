import { createFileRoute } from "@tanstack/react-router";
import { BookCard } from "@/components/book-card";
import { books } from "@/lib/content";

export const Route = createFileRoute("/audiobooks")({
  head: () => ({
    meta: [
      { title: "ኦዲዮ መጻሕፍት — Berhan" },
      { name: "description", content: "በድምፅ የተዘጋጁ መንፈሳዊ መጻሕፍትና ትረካዎች።" },
      { property: "og:title", content: "ኦዲዮ መጻሕፍት — Berhan" },
      { property: "og:description", content: "በድምፅ የተዘጋጁ መንፈሳዊ መጻሕፍትና ትረካዎች።" },
    ],
  }),
  component: AudiobooksPage,
});

function AudiobooksPage() {
  const audio = books.filter((b) => b.kind === "audio");

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="text-4xl font-bold mb-2">ኦዲዮ መጻሕፍት</h1>
      <p className="text-muted-foreground mb-12">በድምፅ የተዘጋጁ ትረካዎችና ትምህርቶች</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {audio.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
