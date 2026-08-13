import { createFileRoute } from "@tanstack/react-router";
import { BookCard } from "@/components/book-card";
import { books } from "@/lib/content";

export const Route = createFileRoute("/books/")({
  head: () => ({
    meta: [
      { title: "የመጻሕፍት መደብር — Berhan Bookstore" },
      {
        name: "description",
        content: "የሚከፈልባቸውና ነጻ መንፈሳዊ መጻሕፍት፣ ኦዲዮ መጻሕፍትና ትምህርቶች በአንድ ቦታ።",
      },
      { property: "og:title", content: "የመጻሕፍት መደብር — Berhan Bookstore" },
      {
        property: "og:description",
        content: "የሚከፈልባቸውና ነጻ መንፈሳዊ መጻሕፍት በአንድ ቦታ።",
      },
    ],
  }),
  component: BooksPage,
});

function BooksPage() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">የመጻሕፍት መደብር</h1>
        <p className="text-muted-foreground">የተመረጡ የሚከፈልባቸው እና ነጻ መጻሕፍት</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
