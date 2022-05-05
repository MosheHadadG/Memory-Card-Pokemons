//* array of objects pokemons
import { pokemons as arrPokemons } from "./pokemons.js";

//* number of pokemons
export const numOfPokemons = 6;

//* A function that takes an array of objects (arrPokemons) and takes num-(numOfPokemons) objects randomly
//*  and inserts them into a new array without duplicates
export function randomPokemonsFromArray() {
  const arrPokemonsRandom = [];
  let namesPokemon = [];
  for (let i = 0; i < numOfPokemons; i++) {
    let randomIndex = Math.floor(Math.random() * arrPokemons.length);
    let randomCard = arrPokemons[randomIndex];
    if (!namesPokemon.includes(randomCard.name)) {
      arrPokemonsRandom.push(randomCard);
    }
    else {
      i -= 1;
    }
    namesPokemon.push(randomCard.name);
  }
 
  return arrPokemonsRandom;
}

//* array of objects pokemons
const pokemonsRandom = randomPokemonsFromArray();

//* Create a duplicate for each Pokemon (concat array twice)
export function duplicatePokemon(pokemonsRandom) {
  return pokemonsRandom.concat(pokemonsRandom);
} 

//* total pokemons with duplicate for each Pokemon
const totalPokemons = duplicatePokemon(pokemonsRandom);


//* shuffle pokemons with sort and Math random
export function shufflePokemons(totalPokemons) {
  return totalPokemons.sort(() => Math.random() - 0.5);

}

export const shuffledPokemons = shufflePokemons(totalPokemons);
