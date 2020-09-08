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
    this.phrases.push(new Phrase("Part of the journey is the end"));
    this.phrases.push(
      new Phrase("I would rather be a good man than a great king")
    );
    this.phrases.push(new Phrase("Teach Me"));
    this.phrases.push(new Phrase("Hulk smash"));
    this.phrases.push(new Phrase("I can do this all day"));
    return this.phrases;
  }

  checkPhrase() {

  }

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
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const gameLetterElements = document.querySelectorAll("#phrase li");
    const noMoreLives = this.missed > 5;
    let foundPhrase = false

    console.log(`foundPhrase = ${foundPhrase}`);
    console.log(`noMoreLives = ${noMoreLives}`);
    // console.log(`foundAllLetters = ${foundAllLetters}`);
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const scoreboardPics = document.querySelectorAll("#scoreboard li");
    if (this.missed > 4) {
      console.log("its greater than 5");
      return this.gameOver(this.checkForWin());
    }

    for (let i = 0; i < scoreboardPics.length; i++) {
      let item = scoreboardPics[i];
      const itemSRC = item.firstChild.getAttribute("src");
      if (itemSRC === "images/liveHeart.png") {
        item.firstChild.setAttribute("src", "images/lostHeart.png");
        this.missed++;
        break;
      }
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const phraseDiv = document.querySelector("#phrase ul");
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
    console.log(button);
    let currentKey = button.innerText;
    console.log(currentKey);
    if (this.activePhrase.checkLetter(currentKey)) {
      this.activePhrase.showMatchedLetter(currentKey);
      button.disabled = true;
      button.classList.add("chosen");
    } else {
      button.disabled = true;
      button.classList.add("wrong");
      this.removeLife();
    }
    if (this.checkForWin()) {}
  }
}