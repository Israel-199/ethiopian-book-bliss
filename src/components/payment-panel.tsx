import { paymentInfo } from "@/lib/content";

export function PaymentPanel({ price }: { price?: number }) {
  return (
    <div className="max-w-2xl mx-auto my-24 p-8 border border-primary/20 bg-background/50 relative">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
        የክፍያ መመሪያ (Payment Info)
      </div>
      <h3 className="text-xl font-bold mb-6 text-center">
        መጽሐፉን ለመግዛት የሚከተሉትን ይከተሉ
        {price ? ` — ${price} ብር` : ""}
      </h3>
      <div className="space-y-6">
        <div className="p-4 bg-card/80 rounded-sm border border-primary/5">
          <p className="text-xs text-muted-foreground uppercase mb-2">
            የባንክ አካውንት (CBE / Abyssinia)
          </p>
          <p className="text-lg font-mono font-bold">{paymentInfo.banks}</p>
          <p className="text-sm">ስም: {paymentInfo.holder}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            ክፍያውን ከፈጸሙ በኋላ የደረሰኙን ፎቶ (Screenshot) በቴሌግራም ይላኩልን።
          </p>
          <a
            href={paymentInfo.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-telegram text-telegram-foreground px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
          >
            በቴሌግራም ይላኩ ({paymentInfo.telegramHandle})
          </a>
        </div>
      </div>
    </div>
  );
}
