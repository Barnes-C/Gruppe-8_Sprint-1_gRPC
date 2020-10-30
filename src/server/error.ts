import { logger } from '../shared/logger';

export class PokemonNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    logger.error('PokemonNotFoundError.constructor()');
    this.name = 'PokemonNotFoundError';
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}
