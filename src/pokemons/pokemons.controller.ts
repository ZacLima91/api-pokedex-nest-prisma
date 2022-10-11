import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { Pokemon } from './entity/pokemon.entity';
import { PokemonService } from './pokemons.service';

@ApiTags('pokemons')
@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista todos pokemons',
  })
  getAll() {
    return this.pokemonService.getAll();
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um novo pokemon',
  })
  create(@Body() dto: CreatePokemonDto): Promise<Pokemon> {
    return this.pokemonService.create(dto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Lista um pokemon',
  })
  getById(@Param('id') id: string): Promise<Pokemon> {
    return this.pokemonService.getById(id);
  }
}
