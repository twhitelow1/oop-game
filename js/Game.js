/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const phraseList = document.querySelector("#phrase ul");

class Game {
  constructor(missed = 0, phrases = [], activePhrase = "") {
    this.missed = missed;
    this.phrases = phrases;
    this.activePhrase = activePhrase;
  }
  /**
   * Create Phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    this.phrases.push(new Phrase("Phrase"));
    this.phrases.push(new Phrase("I need"));
    this.phrases.push(new Phrase("Teach Me"));
    this.phrases.push(new Phrase("Hulk smash"));
    this.phrases.push(new Phrase("Test"));
    return this.phrases;
  }

  /**
   *  Check to see if the phrase hase been gueesed by going through each letter in phrase
   * @return {boolean} fales if current letter has the 'hide' class and true if no matches found
   */
  foundPhrase() {
    const gameLetterElements = document.querySelectorAll("#phrase li");
    for (let i = 0; i < gameLetterElements.length; i++) {
      let currentLetter = gameLetterElements[i];
      if (currentLetter.classList.contains("hide")) {
        return false;
      }
    }
    return true;
  }

  /**
   * Select the hearts and reset them all to alive
   */
  resetHearts() {
    const scoreboardPics = document.querySelectorAll("#scoreboard li");
    for (let i = 0; i < scoreboardPics.length; i++) {
      scoreboardPics[i].firstChild.setAttribute("src", "images/liveHeart.png");
    }
  }
  /**
   *  Utility class to check on how many lives left
   *  @return true is this.missed is >= 5 false if this.missed < 5
   */
  noMoreLives() {
    return (this.missed >= 5);
  }
  /**
   *  Utility class to grab a random phrase. generate a random number inside of brackets to access phrases array
   *  @return {string} random phrase string 
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.querySelector("#overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  /**
   *  Checks if two conditions that end the game are true and if they are then returns true or false
   *  @return {boolean} True if no more lives or if the phrase has been identified
   */
  isGameOver() {
    return (this.noMoreLives() || this.foundPhrase())
  }
  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    if (!this.noMoreLives() && this.foundPhrase()) {
      return true
    } else {
      return false
    }
  }

  /**
   *   This takes in the amount of lives and then updates the hearts to reflect it
   */
  updateLives() {
    const scoreboardPics = document.querySelectorAll("#scoreboard li");
    this.resetHearts();
    for (let i = 0; i < this.missed; i++) {
      let item = scoreboardPics[i];
      item.firstChild.setAttribute("src", "images/lostHeart.png");
    }
  }


  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed++;
    this.updateLives();
    if (this.isGameOver()) {
      this.gameOver(this.checkForWin())
    };
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const gameLetterElements = document.querySelectorAll('#phrase li');
    const overlayElement = document.querySelector("#overlay");
    const overlayH1Element = document.querySelector("#overlay h1");
    overlayElement.style.display = "block";
    if (gameWon) {
      overlayH1Element.innerText = "You win!";
      overlayElement.classList.remove("start");
      overlayElement.classList.add("win");
    } else {
      overlayH1Element.innerText = "You Lose!";
      overlayElement.classList.remove("start");
      overlayElement.classList.add("lose");
    }

    // Remove the previous phrase
    gameLetterElements.forEach(letterLi => {
      letterLi.remove();
    })
    // Reset the hearts
    const scoreboardPics = document.querySelectorAll("#scoreboard li");
    for (let i = 0; i < scoreboardPics.length; i++) {
      scoreboardPics[i].firstChild.setAttribute("src", "images/liveHeart.png");
    }
    // Clear the keyboard
    const keyboard = document.querySelectorAll('#qwerty button');
    keyboard.forEach(key => {
      key.disabled = false;
      key.classList.remove("chosen");
      key.classList.remove("wrong");
      key.classList.add("key");
    })
    // Set  missed count to zero
    this.missed = 0;

  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    let currentKey = button.innerText;
    if (this.activePhrase.checkLetter(currentKey)) {
      this.activePhrase.showMatchedLetter(currentKey);
      button.disabled = true;
      button.classList.add("chosen");
    } else {
      button.disabled = true;
      button.classList.add("wrong");
      this.removeLife();
    }
    if (this.isGameOver()) {
      this.gameOver(this.checkForWin());
    }
  }
}