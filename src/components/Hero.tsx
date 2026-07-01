export default function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-28 flex flex-col items-center text-center gap-6">
        <p className="text-sm font-semibold tracking-widest text-white/80">
          大阪大学 学生団体
        </p>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          TUTOLOOP
        </h1>
        <p className="text-lg text-white/90">チュートループ</p>
        <p className="mt-4 inline-block bg-white/15 rounded-full px-6 py-2 text-lg font-semibold">
          阪大付近のまちを、元気に。
        </p>
      </div>
    </section>
  );
}
