const SETUP_ITEMS = [
  "あいさつメッセージの作成",
  "リッチメニューの作成",
  "ステップ配信の設定",
  "クーポンの作成・配布",
];

const OPERATION_ITEMS = ["更新作業", "新メニュー・イベントの告知", "月1回のクーポン配布"];

export default function LineService() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm font-bold tracking-widest text-emerald-600 mb-2">LINE OFFICIAL</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-12">
          公式LINEの作成・運用代行
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
              アカウントの初期設定
            </span>
            <ul className="space-y-3 text-sm text-slate-600">
              {SETUP_ITEMS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
              運用代行
            </span>
            <ul className="space-y-3 text-sm text-slate-600">
              {OPERATION_ITEMS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
