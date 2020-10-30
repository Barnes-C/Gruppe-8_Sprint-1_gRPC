import { Pokemon } from '../proto/pokemon_pb';
import { client, noop } from './connection';

export default async function createPokemons(pokemons: Pokemon[]) {
  const stream = client.createPokemon(noop);
  for (const pokemon of pokemons) {
    stream.write(pokemon);
  }
  stream.end();
}
