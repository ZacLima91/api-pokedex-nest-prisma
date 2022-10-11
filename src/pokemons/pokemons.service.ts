import { Controller, Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entity/pokemon.entity';

@ApiTags('pokemons')
@Controller('pokemons')
@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreatePokemonDto): Promise<Pokemon> {
    return this.prisma.pokemon.create({ data: dto });
  }

  getAll(): Promise<Pokemon[]> {
    return this.prisma.pokemon.findMany();
  }

  getById(id: string): Promise<Pokemon> {
    return this.prisma.pokemon.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, dto: UpdatePokemonDto): Promise<Pokemon> {
    return this.prisma.pokemon.update({ where: { id }, data: dto });
  }

  delete(id: string) {
    return this.prisma.pokemon.delete({
      where: { id },
      select: { name: true, imageURL: true },
    });
  }
}
