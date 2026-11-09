import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateHistorialAlertaDto {
  @IsString()
  @IsNotEmpty()
  accion: string;

  @IsDate()
  @IsNotEmpty()
  fecha_hora: Date;

  @IsString()
  @IsNotEmpty()
  observacion: string;
}