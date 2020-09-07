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
    return this.phrase.includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter for display
   */
  showMatchedLetter(inputLetter) {
    const gameLetterElements = document.querySelectorAll('#phrase li');
    gameLetterElements.forEach(current => {

      if (current.innerText == inputLetter) {
        current.classList.remove("hide");
        current.classList.add("show");
      }
    })
  }
}