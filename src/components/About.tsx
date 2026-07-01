const ACTIVITIES = [
  {
    number: "01",
    color: "border-blue-800/70 text-blue-800",
    title: "学習塾の運営",
    description: "現役阪大生による個別指導と、LINE×AI復習教材「ループ君」の運営",
  },
  {
    number: "02",
    color: "border-emerald-700/70 text-emerald-700",
    title: "大阪大学フリーマーケットサークル「FASHLOOP」の運営",
    description: "古着回収やアートイベントを地域で開催",
  },
  {
    number: "03",
    color: "border-orange-700/60 text-orange-700",
    title: "地域の店舗支援",
    description: "阪大近くの店舗のウェブ・LINE運用を支援",
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-xs font-bold tracking-[0.3em] text-emerald-800/70 mb-3">ABOUT US</p>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12">
        TUTOLOOPとは
      </h2>
      <div className="flex flex-col gap-4">
        {ACTIVITIES.map((activity) => (
          <div
            key={activity.number}
            className={`border-l-2 ${activity.color} bg-cream/60 rounded-r-xl px-6 py-5`}
          >
            <div className="flex items-baseline gap-3">
              <span className={`font-serif font-bold text-lg ${activity.color}`}>
                {activity.number}
              </span>
              <h3 className="font-bold text-lg text-foreground">{activity.title}</h3>
            </div>
            <p className="mt-1 text-stone-600 text-sm">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
