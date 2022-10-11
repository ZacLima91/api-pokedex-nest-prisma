import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
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

  @Patch(':id')
  @ApiOperation({
    summary: 'Edita um pokemon',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePokemonDto,
  ): Promise<Pokemon> {
    return this.pokemonService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta um pokemon',
  })
  delete(@Param('id') id: string) {
    return this.pokemonService.delete(id);
  }
}
