/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game = {};
const button = document.getElementById('btn__reset');
button.addEventListener('click', event => {
  game = new Game();
  game.createPhrases();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
})