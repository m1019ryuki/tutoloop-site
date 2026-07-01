export default function Pricing() {
  return (
    <section id="price" className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-sm font-bold tracking-widest text-orange-500 mb-2">PRICE</p>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-12">料金プラン</h2>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div className="border border-slate-200 rounded-2xl p-8">
          <h3 className="font-bold text-slate-900 mb-6">ウェブサイト</h3>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-slate-100 pb-3">
              <span className="text-slate-500">初回構築</span>
              <span className="font-bold text-slate-900">5万〜8万円</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">運用</span>
              <span className="font-bold text-slate-900">9,500円/月 + ドメイン代</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-200 rounded-2xl p-8">
          <h3 className="font-bold text-slate-900 mb-6">公式LINE</h3>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-slate-100 pb-3">
              <span className="text-slate-500">初期設定</span>
              <span className="font-bold text-slate-900">80,000円</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">運用代行</span>
              <span className="font-bold text-slate-900">12,500円/月 + システム料5,500円/月</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-blue-600 to-emerald-500 text-white rounded-2xl p-10 text-center">
        <span className="inline-block bg-orange-400 text-white text-xs font-bold px-4 py-1 rounded-full mb-4">
          ★ おすすめ
        </span>
        <h3 className="text-2xl font-extrabold mb-1">セットプラン</h3>
        <p className="text-white/80 text-sm mb-8">Webサイト ＋ 公式LINE</p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <div className="bg-white/15 rounded-xl p-6">
            <p className="text-sm text-white/80 mb-1">初回設定</p>
            <p className="text-2xl font-extrabold">100,000円</p>
          </div>
          <div className="bg-white/15 rounded-xl p-6">
            <p className="text-sm text-white/80 mb-1">運用代行</p>
            <p className="text-2xl font-extrabold">月額15,000円</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/70">＋ドメイン代 ＋ 公式LINEシステム料金</p>
      </div>
    </section>
  );
}
