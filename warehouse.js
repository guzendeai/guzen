const params = new URLSearchParams(window.location.search);
const theme = params.get('word') || '言葉';
document.getElementById('theme-word').textContent = theme;

const keywordData = {
  '太陽': [  ],
  '砂浜': [  ],
  '光': [  ],
  '空': [  ]
  // 無限に増やせます！
};

const slots = Array.from({ length: 10 }, (_, i) => document.getElementById(`slot${i + 1}`));
const selectedKeywords = (keywordData[theme] || []).sort(() => Math.random() - 0.5).slice(0, 5);
const selectedSlots = slots.sort(() => Math.random() - 0.5).slice(0, selectedKeywords.length);

selectedKeywords.forEach((item, i) => {
  const slot = selectedSlots[i];
  slot.textContent = item.label;
  slot.href = item.href;
  slot.style.display = 'block';
});