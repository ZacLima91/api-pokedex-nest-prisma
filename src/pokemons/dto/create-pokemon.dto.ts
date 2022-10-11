import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'pikachu',
    description: 'Nome do pokemon a ser criado',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Pokemon eletrico , carismatico...',
    description: 'Descrição do pokemon a ser criado',
  })
  description: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Electric',
    description: 'Tipo do pokemon a ser criado',
  })
  type: string[];

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '1.5',
    description: 'Altura do pokemon a ser criado',
  })
  height: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '3.6',
    description: 'Peso do pokemon a ser criado',
  })
  weight: number;

  @IsUrl()
  @IsNotEmpty()
  @IsString()
  imageURL: string;
}
