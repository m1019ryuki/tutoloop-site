export default function StudentNetwork() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm font-bold tracking-widest text-orange-500 mb-2">STUDENT NETWORK</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-12">
          阪大生ネットワークで、お店を直接宣伝できます
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 items-stretch">
          <div className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <p className="text-sm text-white/80 mb-2">フリマサークル「FASHLOOP」</p>
            <p className="text-5xl font-extrabold">
              総勢 100 <span className="text-2xl font-bold">人</span>
            </p>
            <p className="mt-2 text-sm text-white/80">に向けてお店をPR</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm text-sm text-slate-600">
              フリマイベント・地域イベント等の際にお店を告知することも可能
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-sm text-slate-600">
              「阪大生に人気のお店」としてクチコミが広がりやすい
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
