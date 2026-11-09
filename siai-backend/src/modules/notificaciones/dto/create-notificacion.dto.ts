import { IsString, IsNotEmpty, IsDate, IsBoolean } from 'class-validator';

export class CreateNotificacionDto {
  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @IsDate()
  @IsNotEmpty()
  fecha_hora: Date;

  @IsBoolean()
  @IsNotEmpty()
  leida: boolean;
}