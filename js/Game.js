/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed = 0, phrases = [], activePhrase = "") {
    this.missed = missed;
    this.phrases = phrases;
    this.activePhrase = activePhrase
  }
  /**
   * Create Phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    this.phrases.push(new Phrase("Part of the journey is the end"));
    this.phrases.push(new Phrase("I would rather be a good man than a great king"));
    this.phrases.push(new Phrase("Teach Me"));
    this.phrases.push(new Phrase("Hulk smash"));
    this.phrases.push(new Phrase("I can do this all day"));
    return this.phrases
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)]
  }

  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay();
  }
}