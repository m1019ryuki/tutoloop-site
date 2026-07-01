export default function WebsiteService() {
  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs font-bold tracking-[0.3em] text-blue-800/70 mb-3">WEBSITE</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12">
          ウェブサイトの作成
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8">
            <span className="inline-block border border-blue-800/40 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
              STEP 1｜初期構築
            </span>
            <h3 className="font-bold text-lg text-foreground mb-2">ご要望に合わせてHPを作成</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              お店の雰囲気やメニュー、伝えたいことをヒアリングし、スマホでもきれいに見えるホームページを一からデザイン・制作します。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <span className="inline-block border border-emerald-700/40 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
              STEP 2｜運用
            </span>
            <ul className="space-y-3 text-sm text-stone-600">
              <li className="flex gap-2">
                <span className="text-emerald-700">✓</span>
                サーバー・ドメインの保守、SSL証明書の更新等
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-700">✓</span>
                <span>
                  毎月5か所までの修正・変更に対応
                  <br />
                  <span className="text-xs text-stone-400">
                    └ 新メニューの追加や料金改定、お知らせの更新など
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
