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
  @IsInt({ message: 'El ID del sensor debe ser un número entero' })
  @IsPositive({ message: 'El ID del sensor debe ser un número positivo' })
  id_sensor: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'El valor debe ser un número' })
  valor: number;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha y hora debe tener formato ISO 8601' })
  fecha_hora?: string;
}
