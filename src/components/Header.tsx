import Image from "next/image";

const NAV_ITEMS = [
  { href: "#about", label: "TUTOLOOPとは" },
  { href: "#works", label: "制作実績" },
  { href: "#service", label: "店舗支援サービス" },
  { href: "#price", label: "料金" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-18 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="TUTOLOOP" width={40} height={40} className="rounded-full" />
          <span className="font-serif font-bold text-lg tracking-wide text-foreground">
            TUTOLOOP
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-stone-600 tracking-wide">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm font-bold px-5 py-2 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
        >
          相談する
        </a>
      </div>
    </header>
  );
}
