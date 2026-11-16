import { Type } from 'class-transformer';
import {
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateAlertaDto {
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  id_estacion: number;

  @Type(() => Number)
  @IsInt()
  @IsPositive()
  id_zona: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['baja', 'media', 'alta', 'critica'])
  @MaxLength(30)
  nivel: string;

  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @IsOptional()
  @IsDateString()
  fecha_hora?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  estado?: string;
}
