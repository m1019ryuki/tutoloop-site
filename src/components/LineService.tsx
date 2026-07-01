import Image from "next/image";

const SETUP_ITEMS = [
  "あいさつメッセージの作成",
  "リッチメニューの作成",
  "ステップ配信の設定",
  "クーポンの作成・配布",
];

const OPERATION_ITEMS = ["更新作業", "新メニュー・イベントの告知", "月1回のクーポン配布"];

export default function LineService() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-xs font-bold tracking-[0.3em] text-emerald-800/70 mb-3">LINE OFFICIAL</p>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12">
        公式LINEの作成・運用代行
      </h2>
      <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-6 items-start">
        <div className="bg-cream rounded-2xl p-8">
          <span className="inline-block border border-emerald-700/40 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            アカウントの初期設定
          </span>
          <ul className="space-y-3 text-sm text-stone-600">
            {SETUP_ITEMS.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-700">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-cream rounded-2xl p-8">
          <span className="inline-block border border-blue-800/40 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            運用代行
          </span>
          <ul className="space-y-3 text-sm text-stone-600">
            {OPERATION_ITEMS.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-blue-800">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative hidden sm:block w-40 h-72 mx-auto rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/images/line-loopkun-chat.jpg"
            alt="TUTOLOOPの公式LINE配信イメージ「ループ君」"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
