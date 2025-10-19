import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
  static getRandomQuoteViaAPI() {
    const urlc = 'https://quoteslate.vercel.app/api/quotes/random';
    return fetch(urlc)
      .then((response) => response.json())
      .then((data) => {
        const { id, quote, author } = data;
        return new Quote(id, quote, author);
      })
      .catch((error) => {
        console.error('Error fetching quote from API:', error);
        return null;
      });
  }
}

export default RandomQuote;
