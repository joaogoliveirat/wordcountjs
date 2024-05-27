const fs = require('fs');
const filePath = 'C:/Users/exemplo/Documents/exemplo.txt';
try {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const stopwords = fs.readFileSync('./stop_words.txt', 'utf8').split(',');
  const words = fileContent.toLowerCase().match(/[a-z]{2,}/g);
  const counts = words.reduce((acc, word) => {
    if (!stopwords.includes(word)) acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
  const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 25);
  sortedCounts.forEach(([word, count]) => console.log(word, '-', count));
} catch (error) {
  console.error('Error reading this file:', error);
}
