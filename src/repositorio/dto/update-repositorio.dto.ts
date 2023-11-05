import { PartialType } from '@nestjs/mapped-types';
import { CreateRepositorioDto } from './create-repositorio.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateRepositorioDto {

  @ApiProperty({ description: 'Ruta del repositorio', example: 'https://git-prueba.com/repositorio1.git' })
  @IsOptional()
  ruta: string;

  @ApiProperty({ description: 'Descripción del repositorio', example: 'Repositorio de prueba' })
  @IsOptional()
  descripcion: string;

  @ApiProperty({ description: 'Indica si el repositorio es público', example: true })
  @IsBoolean()
  @IsOptional()
  publico: boolean;

  @ApiProperty({ description: 'Id del proyecto al que pertenece el repositorio', example: '1' })
  @IsOptional()
  idProyecto: string;

}
