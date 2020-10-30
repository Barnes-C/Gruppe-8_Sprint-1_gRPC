import { PokemonsClient } from '../proto/pokemon_grpc_pb';
import { credentials } from 'grpc';
import { PORT } from '../server/index';

export const client = new PokemonsClient(
  `localhost:${PORT}`,
  credentials.createInsecure()
);

export const noop = () => {};
