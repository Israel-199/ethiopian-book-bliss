import { Link } from "@tanstack/react-router";
import { paymentInfo } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background/70 py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <span className="text-2xl font-bold text-background font-wordmark block mb-6">
            ረቢ
          </span>
          <p className="max-w-sm text-sm leading-relaxed">
            መንፈሳዊ ዕውቀትን ለሁሉም ተደራሽ ለማድረግ የምንሠራ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ይዘቶችን
            የምናቀርብ መድረክ ነን።
          </p>
        </div>
        <div>
          <h5 className="text-background font-bold mb-6 text-sm uppercase tracking-widest">
            ፈጣን ሊንኮች
          </h5>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/books" className="hover:text-secondary transition-colors">
                መጽሐፍት
              </Link>
            </li>
            <li>
              <Link to="/audiobooks" className="hover:text-secondary transition-colors">
                ኦዲዮዎች
              </Link>
            </li>
            <li>
              <Link to="/teachings" className="hover:text-secondary transition-colors">
                ትምህርቶች
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-secondary transition-colors">
                ብሎግ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-background font-bold mb-6 text-sm uppercase tracking-widest">
            ያግኙን
          </h5>
          <ul className="space-y-3 text-sm">
            <li>Telegram: {paymentInfo.telegramHandle}</li>
            <li>Email: info@rebi.et</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pt-12 mt-12 border-t border-background/10 text-[10px] uppercase tracking-widest flex justify-between">
        <span>&copy; 2016  ረቢ Books. All Rights Reserved.</span>
        <span className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </span>
      </div>
    </footer>
  );
}
