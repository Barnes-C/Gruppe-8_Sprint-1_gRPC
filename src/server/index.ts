import { Server, ServerCredentials } from 'grpc';
import { PokemonsService } from '../proto/pokemon_grpc_pb';
import { PokemonsServer } from './services';

import { logger } from '../shared/logger';

const server = new Server();
server.addService(PokemonsService, new PokemonsServer());

export const PORT = process.env.port || 50051; // Default-Port für gRPC
const URI = `localhost:${PORT}`;

server.bind(URI, ServerCredentials.createInsecure());
logger.info(`Listening on ${URI}`);
server.start();
