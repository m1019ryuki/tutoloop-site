const NAV_ITEMS = [
  { href: "#about", label: "TUTOLOOPとは" },
  { href: "#service", label: "店舗支援サービス" },
  { href: "#price", label: "料金" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-lg tracking-tight text-slate-900">
          TUTOLOOP
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm font-semibold px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-700 transition-colors"
        >
          相談する
        </a>
      </div>
    </header>
  );
}
