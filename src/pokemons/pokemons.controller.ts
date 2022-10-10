import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PokemonService } from './pokemons.service';

@ApiTags('pokemons')
@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAll() {
    return this.pokemonService.getAll();
  }
}
