import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-28 flex flex-col items-center text-center gap-6">
        <p className="text-xs font-bold tracking-[0.3em] text-emerald-800/70">
          大阪大学 学生団体
        </p>
        <Image
          src="/images/logo.png"
          alt="TUTOLOOP"
          width={112}
          height={112}
          priority
          className="rounded-full shadow-sm"
        />
        <h1 className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
          TUTOLOOP
        </h1>
        <p className="text-sm tracking-[0.2em] text-stone-500">チュートループ</p>
        <p className="mt-4 font-serif text-xl sm:text-2xl text-foreground">
          阪大付近のまちを、元気に。
        </p>
      </div>
    </section>
  );
}
