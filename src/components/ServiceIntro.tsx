import Image from "next/image";

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
      <p className="text-sm text-stone-600 max-w-2xl mb-4">
        お客様の多くは、来店前にインターネットでお店を調べています。ウェブサイトと公式LINEがあるだけで、
        出会えるはずだったお客様との接点が大きく増えます。
      </p>
      <div className="relative w-full max-w-3xl aspect-[1295/727] mb-14">
        <Image
          src="/images/stats-survey.png"
          alt="インターネットでお店の情報を調べる人の割合を示す調査データ"
          fill
          className="object-contain"
        />
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
