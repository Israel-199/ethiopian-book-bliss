import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PaymentPanel } from "@/components/payment-panel";
import { books } from "@/lib/content";
import { useAccess } from "@/lib/access";

export const Route = createFileRoute("/books/$bookId")({
  loader: ({ params }) => {
    const book = books.find((b) => b.id === params.bookId);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "አልተገኘም — Berhan" }, { name: "robots", content: "noindex" }],
      };
    }
    const { book } = loaderData;
    return {
      meta: [
        { title: `${book.title} — Berhan` },
        { name: "description", content: book.summary },
        { property: "og:title", content: `${book.title} — Berhan` },
        { property: "og:description", content: book.summary },
      ],
    };
  },
  component: BookDetail,
});

function BookDetail() {
  const { book } = Route.useLoaderData();
  const { state, request } = useAccess();
  const status = book.kind === "free" ? "granted" : state[book.id];

  return (
    <article className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-start">
        <img
          src={book.cover}
          alt={`${book.title} የመጽሐፍ ሽፋን`}
          width={512}
          height={768}
          className="w-full aspect-2/3 object-cover rounded-sm shadow-manuscript"
        />
        <div>
          <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs block mb-4">
            {book.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{book.title}</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">{book.summary}</p>

          <div className="border-l-4 border-secondary bg-card p-6 mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              ናሙና ንባብ
            </p>
            <p className="leading-relaxed">{book.preview}</p>
          </div>

          {status === "granted" ? (
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs font-bold uppercase text-success">ተፈቅዷል — ሙሉ ይዘት</p>
              {book.fullContent.map((p) => (
                <p key={p} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ) : status === "pending" ? (
            <div className="max-w-2xl p-6 border border-pending/40 bg-pending/10">
              <p className="font-bold mb-2">ፈቃድ ይጠብቃል (Pending)</p>
              <p className="text-sm text-muted-foreground">
                አድሚን ክፍያዎን እያረጋገጠ ነው። ከጸደቀ በኋላ ሙሉ ይዘቱ በ
                <Link to="/dashboard" className="text-primary font-bold">
                  {" "}
                  የእኔ መጻሕፍት{" "}
                </Link>
                ውስጥ ይታያል።
              </p>
            </div>
          ) : (
            <button
              onClick={() => request(book.id)}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-bold hover:bg-foreground transition-colors cursor-pointer"
            >
              መጽሐፉን ይግዙ ({book.price} ብር)
            </button>
          )}
        </div>
      </div>

      {status !== "granted" && <PaymentPanel price={book.price} />}
    </article>
  );
}
