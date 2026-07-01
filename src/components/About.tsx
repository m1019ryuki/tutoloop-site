const ACTIVITIES = [
  {
    number: "01",
    color: "border-blue-500 text-blue-500",
    title: "学習塾の運営",
    description: "現役阪大生による個別指導と、LINE×AI復習教材「ループ君」の運営",
  },
  {
    number: "02",
    color: "border-emerald-500 text-emerald-500",
    title: "大阪大学フリーマーケットサークル「FASHLOOP」の運営",
    description: "古着回収やアートイベントを地域で開催",
  },
  {
    number: "03",
    color: "border-orange-400 text-orange-400",
    title: "地域の店舗支援",
    description: "阪大近くの店舗のウェブ・LINE運用を支援",
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-sm font-bold tracking-widest text-emerald-600 mb-2">ABOUT US</p>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-12">
        TUTOLOOPとは
      </h2>
      <div className="flex flex-col gap-4">
        {ACTIVITIES.map((activity) => (
          <div
            key={activity.number}
            className={`border-l-4 ${activity.color} bg-slate-50 rounded-r-xl px-6 py-5`}
          >
            <div className="flex items-baseline gap-3">
              <span className={`font-extrabold text-lg ${activity.color}`}>
                {activity.number}
              </span>
              <h3 className="font-bold text-lg text-slate-900">{activity.title}</h3>
            </div>
            <p className="mt-1 text-slate-600 text-sm">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
