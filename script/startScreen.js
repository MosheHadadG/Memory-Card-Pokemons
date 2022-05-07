// Start Game screen background & button
export const startGameScreen = document.querySelector('.startGame')
export const startGameBtn = document.querySelector('#startGameBtn');
// game board
export const topGameBoard  = document.querySelector('.top')
export const gameBoard = document.querySelector('.game-board')

// Click on Start Game button
export function buttonStartGame() {
startGameBtn.addEventListener('click', (event) => {
  startGameScreen.style.display = 'none'
  topGameBoard.style.display = 'block'
  gameBoard.style.display = 'flex'
})
}

// How To Play Box & button
export const boxHowToPlay = document.querySelector(".boxHowToPlay");
export const howToPlayBtn = document.querySelector("#howToPlayBtn");
export const closeBoxHowToPlay = document.querySelector('.closeBoxHowToPlay');

export function howToPlay(){
howToPlayBtn.addEventListener('click', () => {
  boxHowToPlay.style.display = "block";
})

closeBoxHowToPlay.addEventListener('click', () => {
  boxHowToPlay.style.display = "none";
})

window.addEventListener('click', (event) => {
  if (event.target == boxHowToPlay) {
    boxHowToPlay.style.display = "none"
  }
})
}