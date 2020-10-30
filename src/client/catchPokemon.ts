import { Pokemon, PokemonRequest } from '../proto/pokemon_pb';
import { client } from './connection';
import { PokemonNotFoundError } from '../server/error';

export default function catchPokemon(id: number) {
  return new Promise<Pokemon>((resolve, reject) => {
    const request = new PokemonRequest();
    request.setId(id);
    request.setCaught(true);

    client.catchPokemon(request, (err, pokemon) => {
      if (err) reject(err);
      else resolve(pokemon);
    });
  }).catch((err: PokemonNotFoundError) => {
    throw err;
  });
}
