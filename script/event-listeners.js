import { randomPokemonsFromArray, duplicatePokemon, shufflePokemons, numOfPokemons } from "./randomizeCards.js";
import { stopTimer, startTimer, timer } from "./timer.js";
export const correctMatch = document.querySelector('#correct');
export const UncorrectMatch = document.querySelector('#unCorrect');
export const boxResult = document.querySelector('.boxResult');
export const messageWin = document.querySelector("#msg");


// counters 
export let correctMatchCount = 0;
export let unCorrectMatchCount = 0;
export let winCounter = 0;
export let lockBoard = false;


//! check win
function checkWin() {
  let msg = "You Won!";
  if (winCounter === (numOfPokemons * 2) / 2) {
    stopTimer();
    messageWin.innerText = msg;
    winCounter = 0;
  }
};


//! card Event (check Match)
export function checkMatch(event) {
  const clickedCard = event.target;
  // add class openCard to card when clicked.
  clickedCard.classList.add('openCard');
// array of all cards open (clicked)
  const openCards = document.querySelectorAll('.openCard');
  // Logic
  if (openCards.length === 2) {
    // Check Match 
    if (openCards[0].getAttribute('data-pokemon-name') ===
      openCards[1].getAttribute('data-pokemon-name')) {
      //* Correct Match
      winCounter++;
      checkWin()
      openCards.forEach((card) => {
        card.classList.remove('openCard');
        card.style.pointerEvents = 'none';
        // case correct match (box card will be green).
        card.firstChild.style.border = "4px solid rgb(28, 152, 28)";
        card.firstChild.style.boxShadow = "0px 7px 7px 0px rgb(28, 152, 28)";
      });
      correctMatchCount++;
      correctMatch.innerText = correctMatchCount;
      boxResult.style.border = "3px solid rgb(28, 152, 28)";
      boxResult.style.boxShadow = "2px 12px 12px 2px rgb(28, 152, 28)";
    }
    //* wrong Match
    else {
      lockBoard = true;
      openCards.forEach((card) => {
        card.classList.remove('openCard');
        // Set timeout in case wrong match (flip to back)
        setTimeout(() => {
          card.classList.remove('toggleCard');
          lockBoard = false;
        }, 1500);
      });
      unCorrectMatchCount++;
      UncorrectMatch.innerText = unCorrectMatchCount;
      boxResult.style.border = "3px solid #FB1B1B";
      boxResult.style.boxShadow = "2px 12px 12px 2px #FB1B1B";
    }
  }
}


//! New Game Event
const newGameBtn = document.querySelector('#newGameBtn')

//* restart (new game)
export function newGame() {
  //* Rest new Array of Pokemons
  let newRandomPokemons = randomPokemonsFromArray();
  let newTotalPokemons = duplicatePokemon(newRandomPokemons);
  let newShuffledPokemons = shufflePokemons(newTotalPokemons);
  let cards = document.querySelectorAll('.card');
  let cardsFront = document.querySelectorAll('.cardFront');
  //*Rest timer 
  stopTimer();
  timer.innerText = '00:00';
  //* replace all old pokemons (a new pokemons)
  newShuffledPokemons.forEach((pokemon,index) => {
    // remove ToggleCard class
    cards[index].classList.remove('toggleCard');
    // rest green Box card to red (defult)
    cards[index].firstChild.style.border = "4px solid #FB1B1B";
    cards[index].firstChild.style.boxShadow = "0 7px 7px 0 #FB1B1B";
    setTimeout(() => {
      cards[index].style.pointerEvents = 'all';
      // first child card front this img of pokemon
      cardsFront[index].firstChild.src = `${pokemon.image}`;
      // second child card front this h1 (name of pokemon)
      cardsFront[index].firstChild.nextSibling.innerText = `${pokemon.name}`;
      // set new attribute with a new name.
      cards[index].setAttribute('data-pokemon-name', `${pokemon.name}`);
    },1000)


  });
  //* rest Result Box
  correctMatchCount = 0;
  correctMatch.innerText = correctMatchCount;
  unCorrectMatchCount = 0;
  UncorrectMatch.innerText = unCorrectMatchCount;
  boxResult.style.border = "3px solid #2a75bb";
  boxResult.style.boxShadow = "2px 12px 12px 2px #2a75bb";
  // Clear Winner Message
  messageWin.innerText = '';

}

newGameBtn.addEventListener('click', newGame);

