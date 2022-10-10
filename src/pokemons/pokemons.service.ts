import { Controller, Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/prisma/prisma.service';

@ApiTags('pokemons')
@Controller('pokemons')
@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  getAll() {
    return this.prisma.pokemon.findMany();
  }
}
