import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Pokemon } from '../proto/pokemon_pb';
import { PokemonNotFoundError } from '../server/error';
import { client } from './connection';

export default function allPokemons() {
  return new Promise<Pokemon[]>((resolve, reject) => {
    const stream = client.getPokemons(new Empty());
    const pokemons: Pokemon[] = [];
    stream.on('data', (pokemon: Pokemon) => pokemons.push(pokemon));
    stream.on('error', reject);
    stream.on('end', () => resolve(pokemons));
  }).catch((err: PokemonNotFoundError) => {
    throw err;
  });
}
