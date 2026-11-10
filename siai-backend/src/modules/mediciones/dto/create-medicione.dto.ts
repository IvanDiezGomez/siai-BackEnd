import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreateMedicioneDto {
  @IsNumber()
  valor: number;

  @IsString()
  @IsNotEmpty()
  unidad: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsDateString()
  fecha: string;

  @IsNumber()
  estacionId: number;
}
