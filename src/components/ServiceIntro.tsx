const STATS = [
  { value: "88.9%", label: "Googleでお店の場所を調べる人の割合" },
  { value: "47.3%", label: "お店・企業のホームページで情報を調べる人の割合" },
];

const CARDS = [
  {
    icon: "🌐",
    title: "ウェブサイト作成",
    description: "お店の顔となるHPを制作・保守",
  },
  {
    icon: "💬",
    title: "公式LINEの作成・運用代行",
    description: "集客につながるLINE運用を丸ごと代行",
  },
  {
    icon: "🎓",
    title: "阪大生に店舗紹介",
    description: "学生ネットワークでお店を宣伝",
  },
];

export default function ServiceIntro() {
  return (
    <section id="service" className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-xs font-bold tracking-[0.3em] text-orange-700/70 mb-3">OUR PROPOSAL</p>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
        「阪大近くの飲食店を、もっと元気に！」
      </h2>
      <p className="text-sm text-stone-600 max-w-2xl mb-10 leading-relaxed">
        お客様の多くは、来店前にインターネットでお店を調べています。ウェブサイトと公式LINEがあるだけで、
        出会えるはずだったお客様との接点が大きく増えます。
      </p>
      <div className="grid sm:grid-cols-2 gap-6 mb-14">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-cream rounded-2xl px-8 py-10 text-center">
            <p className="font-serif text-5xl font-bold text-foreground">{stat.value}</p>
            <p className="mt-3 text-sm text-stone-600">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {CARDS.map((card) => (
          <div key={card.title} className="bg-cream rounded-2xl px-6 py-8">
            <div className="text-3xl mb-4">{card.icon}</div>
            <h3 className="font-bold text-foreground mb-2">{card.title}</h3>
            <p className="text-sm text-stone-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
