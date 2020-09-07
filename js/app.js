/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const button = document.getElementById('btn__reset');
button.addEventListener('click', event => {
  const game = new Game();
  game.createPhrases();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
  console.log(game.activePhrase.checkLetter('a'))
})