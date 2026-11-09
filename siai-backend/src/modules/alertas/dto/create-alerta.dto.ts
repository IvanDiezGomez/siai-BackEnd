import {IsString, IsNotEmpty, IsDate, IsBoolean,  } from 'class-validator';

export class CreateAlertaDto {
  @IsString()
  @IsNotEmpty()
  nivel: string;

  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @IsDate()
  @IsNotEmpty()
  fecha: Date;

  @IsBoolean()
  @IsNotEmpty()
  estado: boolean;

  

}
