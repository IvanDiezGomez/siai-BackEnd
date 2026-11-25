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
  @IsInt({ message: 'El ID del usuario debe ser un número entero' })
  @IsPositive({ message: 'El ID del usuario debe ser un número positivo' })
  id_usuario: number;

  @Type(() => Number)
  @IsInt({ message: 'El ID de la alerta debe ser un número entero' })
  @IsPositive({ message: 'El ID de la alerta debe ser un número positivo' })
  id_alerta: number;

  @IsString({ message: 'El mensaje debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El mensaje es obligatorio' })
  mensaje: string;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha y hora debe tener formato ISO 8601' })
  fecha_hora?: string;

  @IsOptional()
  @IsBoolean({ message: 'El campo leida debe ser verdadero o falso' })
  leida?: boolean;
}
