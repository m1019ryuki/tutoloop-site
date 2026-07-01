const WORKS = [
  {
    tag: "飲食店",
    name: "咲く家 SAKUYA",
    description: "横浜家系ラーメン店のウェブサイトを制作",
  },
  {
    tag: "学習塾",
    name: "佐沼塾・古川塾",
    description: "個別指導塾のウェブサイトを制作",
  },
  {
    tag: "自社サービス",
    name: "ループ君",
    description: "TUTOLOOPが運営するLINE×AI復習教材のLPを制作",
  },
];

export default function Works() {
  return (
    <section id="works" className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs font-bold tracking-[0.3em] text-emerald-800/70 mb-3">WORKS</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12">
          実際の制作事例
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {WORKS.map((work) => (
            <div key={work.name} className="bg-white rounded-2xl px-6 py-8">
              <span className="inline-block text-xs font-bold text-emerald-800/70 border border-emerald-800/30 rounded-full px-3 py-1 mb-4">
                {work.tag}
              </span>
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">{work.name}</h3>
              <p className="text-sm text-stone-600">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
