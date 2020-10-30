import getPokemon from './getPokemon';
import allPokemons from './getPokemons';
import catchPokemon from './catchPokemon';
import createPokemons from './createPokemon';
import { Pokemon, PokemonType } from '../proto/pokemon_pb';

import { logger } from '../shared/logger';

async function run() {
  const pokemon = await getPokemon(6);
  logger.info(`GetPokemon: ${pokemon.toString()}`);

  const alakazam = new Pokemon();
  alakazam.setId(65);
  alakazam.setName('Alakazam');
  alakazam.setCaught(true);
  alakazam.setType(PokemonType.PSYCHIC);

  const dratini = new Pokemon();
  dratini.setId(147);
  dratini.setName('Dratini');
  dratini.setCaught(false);
  dratini.setType(PokemonType.DRAGON);
  await createPokemons([alakazam, dratini]);

  await catchPokemon(4);

  const pokemons = await allPokemons();
  for (const pokemon of pokemons) {
    logger.info(pokemon.toString());
  }
  getPokemon(34);
}

run();
