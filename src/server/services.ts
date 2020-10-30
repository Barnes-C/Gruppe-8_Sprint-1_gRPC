import {
  ServerUnaryCall,
  sendUnaryData,
  ServerWritableStream,
  ServerReadableStream,
} from 'grpc';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import { Pokemon, PokemonRequest } from '../proto/pokemon_pb';
import { IPokemonsServer } from '../proto/pokemon_grpc_pb';
import { PokemonNotFoundError } from './error';
import { pokemons } from './db';
import { logger } from '../shared/logger';

export class PokemonsServer implements IPokemonsServer {
  getPokemon(
    call: ServerUnaryCall<PokemonRequest>,
    callback: sendUnaryData<Pokemon>
  ) {
    const pokemonId = call.request.getId();
    const pokemon = pokemons.find((p) => p.getId() === pokemonId);

    if (!pokemon) {
      throw new PokemonNotFoundError(
        `Pokemon with ID ${pokemonId} does not exist.`
      );
    }

    callback(null, pokemon);
  }

  getPokemons(call: ServerWritableStream<Empty>) {
    logger.info(`getPokemons: streaming all pokemons.`);
    for (const pokemon of pokemons) call.write(pokemon);
    call.end();
  }

  catchPokemon(
    call: ServerUnaryCall<PokemonRequest>,
    callback: sendUnaryData<Pokemon>
  ) {
    const pokemonId = call.request.getId();
    const pokemon = pokemons.find((p) => p.getId() === pokemonId);

    if (!pokemon) {
      const error: PokemonNotFoundError = {
        name: 'Pokemon Missing',
        message: `Pokemon with ID ${pokemonId} does not exist.`,
      };
      callback(error, null);
      return;
    }
    pokemon.setCaught(true);

    callback(null, pokemon);
  }

  createPokemon(
    call: ServerReadableStream<Empty>,
    callback: sendUnaryData<Empty>
  ) {
    logger.info(`createPokemons: creating new pokemons from stream.`);

    let pokemonCount = 0;

    call.on('data', (p) => {
      pokemonCount++;
      pokemons.push(p);
    });

    call.on('end', () => {
      logger.info(`Created ${pokemonCount} new pokemon(s).`);
      callback(null, new Empty());
    });
  }
}
