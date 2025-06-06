// const params = new URLSearchParams(window.location.search);
// const theme = params.get('word') || '言葉';
// document.getElementById('theme-word').textContent = theme;

// const keywordData = {
//   '太陽': [  ],
//   '砂浜': [  ],
//   '光': [  ],
//   '空': [  ]
//   // 無限に増やせます！
// };

// const slots = Array.from({ length: 10 }, (_, i) => document.getElementById(`slot${i + 1}`));
// const selectedKeywords = (keywordData[theme] || []).sort(() => Math.random() - 0.5).slice(0, 5);
// const selectedSlots = slots.sort(() => Math.random() - 0.5).slice(0, selectedKeywords.length);

// selectedKeywords.forEach((item, i) => {
//   const slot = selectedSlots[i];
//   slot.textContent = item.label;
//   slot.href = item.href;
//   slot.style.display = 'block';
// });

const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id')); // クエリパラメータ ?id=1 を取得

// ID に対応するオブジェクトを探す
const target = objects.find(object => object.id === id);

// 存在する場合のみ処理する
if (target) {
  // <div id="theme-word"> に name を表示
  document.getElementById('theme-word').textContent = target.name;

  // memorys をランダムにシャッフルして3つ取得
  const randomMemories = target.memorys.sort(() => Math.random() - 0.5).slice(0, 3);

  // スロット（slot1〜slot10）を取得してシャッフル
  const slots = Array.from({ length: 10 }, (_, i) =>
    document.getElementById(`slot${i + 1}`)
  ).sort(() => Math.random() - 0.5);

  // ランダムな3スロットに memorys を割り当てる
  randomMemories.forEach((text, index) => {
    const slot = slots[index];
    slot.textContent = text;
    slot.style.display = 'block';
  });
} else {
  document.getElementById('theme-word').textContent = 'データが見つかりません';
}
