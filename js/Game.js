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
    const allPhrases = []
    allPhrases.push(new Phrase("Part of the journey is the end"));
    allPhrases.push(new Phrase("I would rather be a good man than a great king"));
    allPhrases.push(new Phrase("Teach Me"));
    allPhrases.push(new Phrase("Hulk smash"));
    allPhrases.push(new Phrase("I can do this all day"));

    return allPhrases
  }
}

const game = new Game();
gamePhrases = game.createPhrases();