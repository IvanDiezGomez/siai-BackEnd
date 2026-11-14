import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreateEstacioneDto {
  @IsString({ message: "el nombre es texto" })
  @IsNotEmpty()
  nombre: string;

  @IsString({ message: "la observación es texto" })
  @IsNotEmpty()
  observacion: string;

  @IsString({ message: "la ubicación es texto" })
  @IsNotEmpty()
  ubicacion: string;

  @IsNumber()
  @IsNotEmpty()
  latitud: number;

  @IsNumber()
  @IsNotEmpty() 
  longitud: number;

  @IsString({ message: "el estado es texto" })
  @IsNotEmpty()
  estado: string;

  @IsDate({ message: "la fecha es una fecha válida" })
  @IsNotEmpty()
  fecha: Date;
}