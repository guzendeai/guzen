const MAX_LIFE = 3;
const today = new Date().toISOString().split('T')[0];
const key = 'lifeData';

let data = JSON.parse(localStorage.getItem(key)) || { date: today, count: 0 };

if (data.date !== today) {
  data = { date: today, count: 0 };
  localStorage.setItem(key, JSON.stringify(data));
}

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    data = JSON.parse(localStorage.getItem(key));
    if (data.count >= MAX_LIFE) {
      e.preventDefault();
      alert("今日の旅は終わりました。感想を書いてライフを回復しましょう。");
    } else {
      data.count += 1;
      localStorage.setItem(key, JSON.stringify(data));
    }
  });
});
