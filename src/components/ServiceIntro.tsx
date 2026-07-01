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
    <section id="service" className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm font-bold tracking-widest text-white/80 mb-2">OUR PROPOSAL</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          「阪大近くの飲食店を、もっと元気に！」
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {CARDS.map((card) => (
            <div key={card.title} className="bg-white/15 rounded-2xl px-6 py-8">
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-white/85">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
