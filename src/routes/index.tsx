import { createFileRoute, Link } from "@tanstack/react-router";
import { BookCard } from "@/components/book-card";
import { PaymentPanel } from "@/components/payment-panel";
import { books, blogPosts, wordOfTheDay } from "@/lib/content";
import heroImage from "@/assets/hero-manuscript.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ረቢ — የአማርኛ መንፈሳዊ መጻሕፍትና ኦዲዮ መድረክ" },
      {
        name: "description",
        content:
          "የዕለቱ ቃል፣ የሚከፈልባቸውና ነጻ መጻሕፍት፣ ኦዲዮ መጻሕፍት፣ መሠረታዊ ክርስቲያናዊ ትምህርቶችና መንፈሳዊ ሥልጠናዎች በአንድ ቦታ።",
      },
      { property: "og:title", content: "ረቢ — የአማርኛ መንፈሳዊ መጻሕፍትና ኦዲዮ መድረክ" },
      {
        property: "og:description",
        content: "የዕለቱ ቃል፣ መጻሕፍት፣ ኦዲዮና መንፈሳዊ ሥልጠናዎች በአንድ ቦታ።",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <header className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs block mb-4">
              {wordOfTheDay.label}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {wordOfTheDay.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">{wordOfTheDay.body}</p>
            <div className="flex gap-4">
              <Link
                to="/teachings"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-bold hover:bg-foreground transition-colors"
              >
                ዛሬን ያንብቡ
              </Link>
              <Link
                to="/audiobooks"
                className="border border-primary/20 px-8 py-4 rounded-sm font-bold hover:bg-primary/5 transition-colors"
              >
                ኦዲዮ ያዳምጡ
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="በጠዋት ብርሃን የተከፈተ ጥንታዊ የግዕዝ ብራና መጽሐፍ"
              width={1024}
              height={768}
              className="w-full aspect-4/3 object-cover rounded-lg shadow-manuscript"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 shadow-xl border-l-4 border-secondary max-w-[240px]">
              <p className="italic text-sm text-foreground/80 font-display">
                “{wordOfTheDay.quote}”
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-card py-24 border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">የመጻሕፍት መደብር</h2>
              <p className="text-muted-foreground">የተመረጡ የሚከፈልባቸው እና ነጻ መጻሕፍት</p>
            </div>
            <Link
              to="/books"
              className="text-sm font-bold text-primary border-b-2 border-primary/20 pb-1"
            >
              ሁሉንም ይመልከቱ
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <PaymentPanel />

      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold">ከብሎጋችን</h2>
          <Link
            to="/blog"
            className="text-sm font-bold text-primary border-b-2 border-primary/20 pb-1"
          >
            ሁሉንም ጽሑፎች
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                {post.date}
              </p>
              <h3 className="text-xl font-bold mb-3">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
