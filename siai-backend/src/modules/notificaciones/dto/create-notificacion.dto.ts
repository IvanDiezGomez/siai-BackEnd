import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateNotificacionDto {
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  id_usuario: number;

  @Type(() => Number)
  @IsInt()
  @IsPositive()
  id_alerta: number;

  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @IsOptional()
  @IsDateString()
  fecha_hora?: string;

  @IsOptional()
  @IsBoolean()
  leida?: boolean;
}