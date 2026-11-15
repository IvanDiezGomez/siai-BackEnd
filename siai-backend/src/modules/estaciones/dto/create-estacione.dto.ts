import { Type } from 'class-transformer';
import {
  IsDateString,
  IsIn,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEstacioneDto {
  @IsString({ message: 'el nombre debe ser texto' })
  @IsNotEmpty({ message: 'el nombre es obligatorio' })
  @MaxLength(100)
  nombre: string;

  @IsString({ message: 'la ubicación debe ser texto' })
  @IsNotEmpty({ message: 'la ubicación es obligatoria' })
  @MaxLength(255)
  ubicacion: string;

  @IsOptional()
  @Type(() => Number)
  @IsLatitude({ message: 'la latitud debe estar entre -90 y 90' })
  latitud?: number;

  @IsOptional()
  @Type(() => Number)
  @IsLongitude({ message: 'la longitud debe estar entre -180 y 180' })
  longitud?: number;

  @IsOptional()
  @IsString({ message: 'el estado debe ser texto' })
  @IsIn(['activa', 'inactiva', 'mantenimiento'], {
    message: 'el estado debe ser activa, inactiva o mantenimiento',
  })
  @MaxLength(30)
  estado?: string;

  @IsOptional()
  @IsDateString({}, { message: 'la fecha_instalacion debe ser una fecha válida' })
  fecha_instalacion?: string;
}