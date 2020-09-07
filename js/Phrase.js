/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  addPhraseToDisplay = () => {
    const characters = this.phrase.split('');
    phraseDiv = document.querySelector('#phrase ul')
    console.log(phraseDiv);
    // characters.each(character => {


    // })
  }
  checkLetter = () => {

  }

  showMatchedLetter = () => {

  }
}

const phrase = new Phrase("This is the phrase!");