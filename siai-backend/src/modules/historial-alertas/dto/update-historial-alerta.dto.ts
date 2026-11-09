import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialAlertaDto } from './create-historial-alerta.dto.js';

export class UpdateHistorialAlertaDto extends PartialType(
  CreateHistorialAlertaDto,
) {}