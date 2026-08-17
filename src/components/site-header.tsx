import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/books", label: "መጽሐፍት" },
  { to: "/audiobooks", label: "ኦዲዮ" },
  { to: "/teachings", label: "ትምህርቶች" },
  { to: "/courses", label: "ሥልጠናዎች" },
  { to: "/blog", label: "ብሎግ" },
] as const;

export function SiteHeader() {
  return (
    <nav className="border-b border-primary/10 py-6 px-8 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold text-primary font-wordmark">
          ረቢ
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-widest">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-secondary transition-colors"
              activeProps={{ className: "text-secondary" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/dashboard"
          className="hidden sm:block text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          የእኔ መጻሕፍት
        </Link>
        <Link
          to="/login"
          className="px-6 py-2 border border-primary/20 rounded-full text-xs font-bold uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          መግቢያ (Login)
        </Link>
      </div>
    </nav>
  );
}
