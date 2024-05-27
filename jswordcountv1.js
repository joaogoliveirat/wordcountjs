const fs = require('fs');
const stopwords = fs.readFileSync('./stop_words.txt', 'utf8').split(',');
const words = fs.readFileSync(process.argv[2], 'utf8').toLowerCase().match(/[a-z]{2,}/g);
const counts = words.reduce((acc, word) => {
  if (!stopwords.includes(word)) acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 25);
sortedCounts.forEach(([word, count]) => console.log(word, '-', count));
