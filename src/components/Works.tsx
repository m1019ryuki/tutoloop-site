import Image from "next/image";

const WORKS = [
  {
    src: "/images/works-sakuya.png",
    name: "咲く家 SAKUYA",
    description: "横浜家系ラーメン店のウェブサイト",
  },
  {
    src: "/images/works-sanumajuku.png",
    name: "佐沼塾・古川塾",
    description: "個別指導塾のウェブサイト",
  },
  {
    src: "/images/works-loopkun.png",
    name: "ループ君",
    description: "TUTOLOOP自社サービスのLP",
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
        <div className="grid sm:grid-cols-3 gap-6">
          {WORKS.map((work) => (
            <div key={work.name} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image
                  src={work.src}
                  alt={work.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground">{work.name}</h3>
                <p className="text-sm text-stone-500 mt-1">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
