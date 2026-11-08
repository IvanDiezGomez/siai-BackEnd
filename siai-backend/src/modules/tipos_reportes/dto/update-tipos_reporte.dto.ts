import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposReporteDto } from './create-tipos_reporte.dto.js';

export class UpdateTiposReporteDto extends PartialType(CreateTiposReporteDto) {}
