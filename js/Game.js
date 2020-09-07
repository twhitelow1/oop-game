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
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay();
  }
  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    gameLetterElements.forEach(letter => {
      if (letter.classList.contains('hide')) {
        return false
      }
    })
    return true
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {

  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {

  }
}