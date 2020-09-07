/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

addEventListenerList = (list, event) => {
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, event => game.handleInteraction(event.target));
  }
}

let game = {};
const button = document.getElementById('btn__reset');
button.addEventListener('click', event => {
  game = new Game();
  game.createPhrases();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
})

const keys = document.querySelectorAll('#qwerty button');

addEventListenerList(keys, 'click');