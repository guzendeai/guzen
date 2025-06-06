// 扉を開けた先に表示する可能性のあるページ一覧
const scenes = [
  '/scenes/above-ground.html',
  '/scenes/autumnleaves.html',
  '/scenes/bamboo.html',
  '/scenes/bench.html',
  '/scenes/brick.html',
  '/scenes/cat1.html',
  '/scenes/cat2.html',
  '/scenes/cat3.html',
  '/scenes/dog.html',
  '/scenes/electricwire.html',
  '/scenes/firework.html',
  '/scenes/firework1.html',
  '/scenes/firework2.html',
  '/scenes/firework3.html',
  '/scenes/fuji.html',
  '/scenes/hallway.html',
  '/scenes/heart.html',
  '/scenes/japa-room.html',
  '/scenes/jellyfish.html',
  '/scenes/moss.html',
  '/scenes/rainy-road.html',
  '/scenes/sea.html',
  '/scenes/shooting-star.html',
  '/scenes/sparrow.html',
  '/scenes/stunami.html',
  '/scenes/sunset.html',
  '/scenes/typewriter.html',

];

// ランダムに1つ選んで遷移
const selected = scenes[Math.floor(Math.random() * scenes.length)];
window.location.href = selected;