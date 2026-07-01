export default function StudentNetwork() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-xs font-bold tracking-[0.3em] text-orange-700/70 mb-3">STUDENT NETWORK</p>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12">
        阪大生ネットワークで、お店を直接宣伝できます
      </h2>
      <div className="grid sm:grid-cols-2 gap-6 items-stretch">
        <div className="bg-cream rounded-2xl p-8 flex flex-col justify-center items-center text-center">
          <p className="text-sm text-stone-500 mb-2">フリマサークル「FASHLOOP」</p>
          <p className="font-serif text-5xl font-bold text-foreground">
            総勢 100 <span className="text-2xl font-bold">人</span>
          </p>
          <p className="mt-2 text-sm text-stone-500">に向けてお店をPR</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-cream rounded-2xl p-6 text-sm text-stone-600">
            フリマイベント・地域イベント等の際にお店を告知することも可能
          </div>
          <div className="bg-cream rounded-2xl p-6 text-sm text-stone-600">
            「阪大生に人気のお店」としてクチコミが広がりやすい
          </div>
        </div>
      </div>
    </section>
  );
}
