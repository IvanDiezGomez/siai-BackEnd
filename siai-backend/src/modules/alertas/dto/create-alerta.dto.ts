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
  @IsInt({ message: 'El ID de la estación debe ser un número entero' })
  @IsPositive({ message: 'El ID de la estación debe ser un número positivo' })
  id_estacion: number;

  @Type(() => Number)
  @IsInt({ message: 'El ID de la zona debe ser un número entero' })
  @IsPositive({ message: 'El ID de la zona debe ser un número positivo' })
  id_zona: number;

  @IsString({ message: 'El nivel debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nivel es obligatorio' })
  @IsIn(['baja', 'media', 'alta', 'critica'], {
    message: 'El nivel debe ser baja, media, alta o critica',
  })
  @MaxLength(30, { message: 'El nivel no puede superar los 30 caracteres' })
  nivel: string;

  @IsOptional()
  @IsNotEmpty({ message: 'El mensaje es obligatorio' })
  mensaje: string;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha y hora debe tener formato ISO 8601' })
  fecha_hora?: string;

  @IsOptional()
  @IsString({ message: 'El estado debe ser una cadena de texto' })
  @MaxLength(30, { message: 'El estado no puede superar los 30 caracteres' })
  estado?: string;
}
