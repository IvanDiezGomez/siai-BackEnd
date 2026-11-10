import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreateEstacioneDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  observacion: string;

  @IsString()
  @IsNotEmpty()
  ubicacion: string;

  @IsNumber()
  latitud: number;

  @IsNumber()
  longitud: number;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsDate()
  fecha: Date;
}