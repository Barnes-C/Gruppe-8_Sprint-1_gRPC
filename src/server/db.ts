import { Pokemon, PokemonType } from '../proto/pokemon_pb';

export function pokemonToClass({ id, name, caught, type }: Pokemon.AsObject) {
  const pokemon = new Pokemon();
  pokemon.setId(id);
  pokemon.setName(name);
  pokemon.setCaught(caught);
  pokemon.setType(type);
  return pokemon;
}

export const pokemons: Pokemon[] = [
  { id: 1, name: 'Bulbasaur', caught: true, type: PokemonType.GRASS },
  { id: 2, name: 'Ivysaur', caught: false, type: PokemonType.GRASS },
  { id: 3, name: 'Venusaur', caught: true, type: PokemonType.GRASS },
  { id: 4, name: 'Charmander', caught: false, type: PokemonType.FIRE },
  { id: 5, name: 'Charmeleon', caught: true, type: PokemonType.FIRE },
  { id: 6, name: 'Charizard', caught: false, type: PokemonType.FIRE },
  { id: 7, name: 'Squirtle', caught: true, type: PokemonType.WATER },
  { id: 8, name: 'Wartortle', caught: false, type: PokemonType.WATER },
  { id: 9, name: 'Blastoise', caught: true, type: PokemonType.WATER },
].map(pokemonToClass);
