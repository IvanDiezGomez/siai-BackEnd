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
  @IsInt({ message: 'El ID de la alerta debe ser un número entero' })
  @IsPositive({ message: 'El ID de la alerta debe ser un número positivo' })
  id_alerta: number;

  @Type(() => Number)
  @IsInt({ message: 'El ID del usuario debe ser un número entero' })
  @IsPositive({ message: 'El ID del usuario debe ser un número positivo' })
  id_usuario: number;

  @IsString({ message: 'La acción debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La acción es obligatoria' })
  @MaxLength(100, { message: 'La acción no puede superar los 100 caracteres' })
  accion: string;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha y hora debe tener formato ISO 8601' })
  fecha_hora?: string;

  @IsOptional()
  @IsString({ message: 'La observación debe ser una cadena de texto' })
  observacion?: string;
}
