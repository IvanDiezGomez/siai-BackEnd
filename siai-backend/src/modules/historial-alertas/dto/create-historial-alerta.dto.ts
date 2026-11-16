import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateHistorialAlertaDto {
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  id_alerta: number;

  @Type(() => Number)
  @IsInt()
  @IsPositive()
  id_usuario: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  accion: string;

  @IsOptional()
  @IsDateString()
  fecha_hora?: string;

  @IsOptional()
  @IsString()
  observacion?: string;
}