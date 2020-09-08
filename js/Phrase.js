/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const characters = this.phrase.split('');
    const phraseDiv = document.querySelector('#phrase ul')
    characters.forEach(character => {
      const letter = document.createElement('li');
      if (character == ' ') {
        letter.setAttribute("class", "space");
      } else {
        letter.setAttribute("class", ` hide letter ${character}`);
      }
      letter.innerHTML = character;
      phraseDiv.appendChild(letter);
    });
    return characters
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.toLowerCase().includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter for display
   */
  showMatchedLetter(inputLetter) {
    const gameLetterElements = document.querySelectorAll('#phrase li');
    console.log(gameLetterElements)
    gameLetterElements.forEach(current => {
      console.log(`Current phrase letter: ${current.innerText}`);
      console.log(`keyed letter: ${inputLetter}`);
      if (current.innerText.toLowerCase() == inputLetter) {
        current.classList.remove("hide");
        current.classList.add("show");
      }
    })
  }
}