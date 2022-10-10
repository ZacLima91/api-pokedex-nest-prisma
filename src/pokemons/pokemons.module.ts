import { Module } from '@nestjs/common';
import { PokemonController } from './pokemons.controller';
import { PokemonService } from './pokemons.service';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
