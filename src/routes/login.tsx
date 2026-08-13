import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "መግቢያ — Berhan" },
      { name: "description", content: "ወደ መለያዎ ገብተው የገዟቸውን መጻሕፍት ያንብቡ።" },
      { property: "og:title", content: "መግቢያ — Berhan" },
      { property: "og:description", content: "ወደ መለያዎ ገብተው የገዟቸውን መጻሕፍት ያንብቡ።" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <section className="max-w-md mx-auto px-8 py-24">
      <h1 className="text-3xl font-bold mb-2">መግቢያ (Login)</h1>
      <p className="text-muted-foreground mb-10 text-sm">
        የገዟቸውን መጻሕፍት ለማንበብ ወደ መለያዎ ይግቡ።
      </p>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            ኢሜይል
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-card border border-input rounded-sm outline-none focus:border-secondary"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            የይለፍ ቃል
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 bg-card border border-input rounded-sm outline-none focus:border-secondary"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-4 rounded-sm font-bold hover:bg-foreground transition-colors cursor-pointer"
        >
          ግባ
        </button>
      </form>
    </section>
  );
}
