export default function Pricing() {
  return (
    <section id="price" className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs font-bold tracking-[0.3em] text-orange-700/70 mb-3">PRICE</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12">
          料金プラン
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-8">
            <h3 className="font-bold text-foreground mb-6">ウェブサイト</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-stone-200 pb-3">
                <span className="text-stone-500">初回構築</span>
                <span className="font-bold text-foreground">5万〜8万円</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">運用</span>
                <span className="font-bold text-foreground">9,500円/月 + ドメイン代</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <h3 className="font-bold text-foreground mb-6">公式LINE</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-stone-200 pb-3">
                <span className="text-stone-500">初期設定</span>
                <span className="font-bold text-foreground">80,000円</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">運用代行</span>
                <span className="font-bold text-foreground">12,500円/月 + システム料5,500円/月</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-foreground text-cream rounded-2xl p-10 text-center">
          <span className="inline-block bg-orange-700 text-white text-xs font-bold px-4 py-1 rounded-full mb-4">
            ★ おすすめ
          </span>
          <h3 className="font-serif text-2xl font-bold mb-1">セットプラン</h3>
          <p className="text-cream/70 text-sm mb-8">Webサイト ＋ 公式LINE</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="bg-white/10 rounded-xl p-6">
              <p className="text-sm text-cream/70 mb-1">初回設定</p>
              <p className="text-2xl font-bold">100,000円</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <p className="text-sm text-cream/70 mb-1">運用代行</p>
              <p className="text-2xl font-bold">月額15,000円</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-cream/60">＋ドメイン代 ＋ 公式LINEシステム料金</p>
        </div>
      </div>
    </section>
  );
}
