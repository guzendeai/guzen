/* 何冊並べる？ここを変えれば一瞬で増減 */
const TOTAL_BOOKS = 30;

/* 写真ページへの行き先を配列で。必要に応じ追加 */
const links = [
  "./scenes/above-ground.html",
  "./scenes/autumnleaves.html",
  "./scenes/bamboo.html",
  "./scenes/bench.html",
  "./scenes/brick.html",
  "./scenes/cat1.html",
  "./scenes/cat2.html",
  "./scenes/cat3.html",
  "./scenes/dog.html",
  "./scenes/electricwire.html",
  "./scenes/firework.html",
  "./scenes/firework1.html",
  "./scenes/firework2.html",
  "./scenes/fuji.html",
  "./scenes/hallway.html",
  "./scenes/heart.html",
  "./scenes/japa-room.html",
  "./scenes/jellyfish.html",
  "./scenes/moss.html",
  "./scenes/rainy-road.html",
  "./scenes/sea.html",
  "./scenes/shooting-star.html",
  "./scenes/sparrow.html",
  "./scenes/stunami.html",
  "./scenes/sunset.html",
  "./scenes/typewriter.html",
];

/* 本棚コンテナ */
const shelf = document.getElementById("bookshelf");

/* ---------- 本を動的に生成 ---------- */
for (let i = 0; i < TOTAL_BOOKS; i++) {

  /* 50% の確率で背表紙 or 表紙 */
  const isSpine = Math.random() < 0.5;

  /* 要素を作成して class を付与 */
  const book = document.createElement("div");
  book.classList.add("book");
  book.classList.add(isSpine ? "book--spine" : "book--cover");

  /* 表示するタイトル（仮） */
  book.textContent = isSpine ? "言葉の旅" : "ことばのたびに\n出る";

  /* ランダムに行き先を割り当て */
  const goto = links[Math.floor(Math.random() * links.length)];
  book.addEventListener("click", () => location.href = goto);

  /* 本棚に追加 */
  shelf.appendChild(book);
}
