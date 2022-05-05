//* check match function & lockBoard
import { checkMatch, lockBoard } from "./event-listeners.js";
//* array of shuffled pokemons
import { shuffledPokemons } from "./randomizeCards.js";
//* timer function
import { startTimer } from "./timer.js";

export const cards = document.querySelector('.cards')



//* A function that creates cards from the array of objects (shuffledPokemons)
export function drawBoard() {
  shuffledPokemons.forEach((pokemon) => {
    //* create card (inside back & front)
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-pokemon-name', `${pokemon.name}`);
    cards.appendChild(card);

    //* create Pokemon card for each pokemon
    const pokemonCard = document.createElement('div');
    pokemonCard.setAttribute('class', 'cardFront');
    card.appendChild(pokemonCard);
    //* cards.appendChild(pokemonCard);
    //* Pokemon image
    const pokemonImage = document.createElement('img');
    pokemonImage.src = `${pokemon.image}`;
    pokemonImage.classList.add("pokemonImg");
    pokemonCard.appendChild(pokemonImage);
    //* Pokemon name
    const pokemonName = document.createElement('h1');
    pokemonName.innerText = `${pokemon.name}`;
    pokemonName.classList.add('pokemonName');
    pokemonCard.appendChild(pokemonName)
    //* Pokeball image
    const pokeBallImage = document.createElement('img');
    pokeBallImage.src = "images/Pokeball.png";
    pokeBallImage.classList.add('pokeBallImg');
    pokemonCard.appendChild(pokeBallImage);

    //* create card back for each pokemon
    const cardBack = document.createElement('div');
    cardBack.setAttribute('class', 'cardBack');
    card.appendChild(cardBack);

    //* on click card
    //*1. toggle class
    //*2. call checkMatch function (in eventListeners file)
    card.addEventListener('click', (event) => {
      //*first time timer run.
      startTimer();
      //* if lock board true stop (when 2 cards unMatch open will be true)
      //* after 1.5second lockboard will be false.
      if (lockBoard) return;
      card.classList.toggle('toggleCard');
      checkMatch(event);
    })

  })
}








