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
  checkLetter() {

  }

  showMatchedLetter() {

  }
}