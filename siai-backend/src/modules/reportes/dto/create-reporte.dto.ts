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

export class CreateReporteDto {
  @IsString({ message: 'El título debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El título es obligatorio' })
  @MaxLength(150, { message: 'El título no puede superar los 150 caracteres' })
  titulo: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  descripcion?: string;

  @Type(() => Number)
  @IsInt({ message: 'El ID del tipo de reporte debe ser un número entero' })
  @IsPositive({
    message: 'El ID del tipo de reporte debe ser un número positivo',
  })
  id_tipo_reporte: number;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha desde debe tener formato ISO 8601' })
  fecha_desde?: string;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha hasta debe tener formato ISO 8601' })
  fecha_hasta?: string;

  @IsOptional()
  @IsDateString(
    {},
    { message: 'La fecha de generación debe tener formato ISO 8601' },
  )
  fecha_generacion?: string;

  @IsOptional()
  @IsString({ message: 'El formato debe ser una cadena de texto' })
  @MaxLength(20, { message: 'El formato no puede superar los 20 caracteres' })
  formato?: string;

  @IsOptional()
  @IsString({ message: 'El estado debe ser una cadena de texto' })
  @MaxLength(20, { message: 'El estado no puede superar los 20 caracteres' })
  estado?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'El ID del usuario debe ser un número entero' })
  @IsPositive({ message: 'El ID del usuario debe ser un número positivo' })
  id_usuario?: number;
}
