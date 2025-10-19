import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuoteAPIBtn = document.getElementById('random-quote-api-btn');
    this.quoteElement = document.getElementById('quote');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.currentQuote = null;
    this.isAPI = false;

    this.init();
  }

  displayCurrentQuote() {
    if (!this.currentQuote) {
      console.warn('Нет текущей цитаты!');
      return;
    }

    const { id, text, author } = this.currentQuote || {};
    // Current quote will have data-current-quote-id HTML attribute
    this.quoteElement.dataset.currentQuoteId = id;
    this.quoteTextElement.textContent = text;
    this.quoteAuthorElement.textContent = author;
  }

  async getRandomQuote() {
    const randomQuote = this.isAPI
      ? await RandomQuote.getRandomQuoteViaAPI()
      : RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayCurrentQuote();
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => {
      this.isAPI = false;
      this.getRandomQuote();
    });
    this.randomQuoteAPIBtn.addEventListener('click', () => {
      this.isAPI = true;
      this.getRandomQuote();
    });
  }
}

export default RandomQuotesApp;
