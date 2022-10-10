import { Injectable } from '@nestjs/common';
import { Pokemon } from './entity/pokemon.entity';

@Injectable()
export class PokemonService {
  pokemon: Pokemon[] = [];

  getAll() {
    return this.pokemon;
  }
}
