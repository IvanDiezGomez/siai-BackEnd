import{IsString, IsNotEmpty, IsDate } from 'class-validator';


export class CreateReporteDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsDate()
    @IsNotEmpty()
    fecha_desde: Date;

    @IsDate()
    @IsNotEmpty()
    fecha_hasta: Date;

    @IsString()     
    @IsNotEmpty()
    formato: string;

    @IsString()
    @IsNotEmpty()
    estado: string;

}
