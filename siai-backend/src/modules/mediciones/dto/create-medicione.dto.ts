import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class CreateMedicioneDto {
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  id_sensor: number;

  @Type(() => Number)
  @IsNumber()
  valor: number;

  @IsOptional()
  @IsDateString()
  fecha_hora?: string;
}
