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
    const gameLetterElements = document.querySelectorAll('#phrase li');
    if (this.missed >= 5) {
      return false
    } else {
      for (let i = 0; i <= gameLetterElements.length; i++) {
        let currentLetter = gameLetterElements[i];
        if (currentLetter.classList.contains('hide')) {
          return false
        } else {
          return true
        }
      }
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const scoreboardPics = document.querySelectorAll('#scoreboard li');
    if (this.missed >= 5) {
      return this.gameOver(this.checkForWin())
    }
    for (let i = 0; i < scoreboardPics.length; i++) {
      let item = scoreboardPics[i]
      const itemSRC = item.firstChild.getAttribute("src");
      if (itemSRC === "images/liveHeart.png") {
        item.firstChild.setAttribute("src", "images/lostHeart.png");
        this.missed++
        break
      }
    }
    if (this.checkForWin) {
      this.gameOver(true)
    }
  }


  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlayElement = document.querySelector('#overlay');
    const overlayH1Element = document.querySelector('#overlay h1');
    overlayElement.style.display = 'block';
    if (gameWon) {
      overlayH1Element.innerText = 'You win!';
      overlayElement.classList.remove('start');
      overlayElement.classList.add('win');
    } else {
      overlayH1Element.innerText = "You Lose!";
      overlayElement.classList.remove('start');
      overlayElement.classList.add('lose');
    }
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    console.log(button)
  }

}