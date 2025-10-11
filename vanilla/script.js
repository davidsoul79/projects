const quotes = [
  'Be yourself; everyone else is already taken. – Oscar Wilde',
  'In the middle of difficulty lies opportunity. – Albert Einstein',
  'Do what you can, with what you have, where you are. – Theodore Roosevelt',
  'The best way to predict the future is to invent it. – Alan Kay',
  'Happiness depends upon ourselves. – Aristotle',
];

const quoteElement = document.getElementById('quote');
const button = document.getElementById('new-quote');

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.style.opacity = 0;

  setTimeout(() => {
    quoteElement.textContent = quotes[randomIndex];
    quoteElement.style.opacity = 1;
  }, 200);
});
