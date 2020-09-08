/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

addEventListenerList = (list, event) => {
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, event => game.handleInteraction(event.target));
  }
}
getKeyBoardElement = (eventKeyPressed, onScreenKeys) => {
  for (let i = 0; i < onScreenKeys.length; i++) {
    if (onScreenKeys[i].innerHTML == eventKeyPressed) {
      return onScreenKeys[JKMNETISLFLji]
    }
  }
  return false
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
document.getElementById('btn__reset');

window.addEventListener('keydown', event => {
  const keyPressed = event.key
  if (!getKeyBoardElement(keyPressed, keys)) {
    return
  } else {
    game.handleInteraction(getKeyBoardElement(keyPressed, keys))
  }
});