import { Link } from "@tanstack/react-router";
import type { Book } from "@/lib/content";

const badge: Record<Book["kind"], { text: (b: Book) => string; className: string }> = {
  paid: { text: (b) => `${b.price} ብር`, className: "bg-primary text-primary-foreground" },
  free: { text: () => "ነጻ (Free)", className: "bg-success text-success-foreground" },
  audio: { text: () => "ኦዲዮ", className: "bg-secondary text-secondary-foreground" },
};

export function BookCard({ book }: { book: Book }) {
  const b = badge[book.kind];

  return (
    <div className="group">
      <Link
        to="/books/$bookId"
        params={{ bookId: book.id }}
        className="block relative overflow-hidden mb-4 rounded-sm bg-muted shadow-sm transition-all group-hover:shadow-md"
      >
        <img
          src={book.cover}
          alt={`${book.title} የመጽሐፍ ሽፋን`}
          loading="lazy"
          width={512}
          height={768}
          className="w-full aspect-2/3 object-cover opacity-95"
        />
        <span
          className={`absolute top-3 right-3 text-[10px] px-2 py-1 font-bold ${b.className}`}
        >
          {b.text(book)}
        </span>
      </Link>
      <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">
        {book.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{book.category}</p>
      <Link
        to="/books/$bookId"
        params={{ bookId: book.id }}
        className={
          book.kind === "free"
            ? "block text-center w-full py-2 border border-foreground text-foreground text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
            : "block text-center w-full py-2 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors"
        }
      >
        {book.kind === "free"
          ? "አሁን ያንብቡ"
          : book.kind === "audio"
            ? "ያዳምጡ"
            : "መጽሐፉን ይግዙ (Buy)"}
      </Link>
    </div>
  );
}
