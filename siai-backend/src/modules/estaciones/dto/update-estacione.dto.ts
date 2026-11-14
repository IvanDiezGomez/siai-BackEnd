import { PartialType } from '@nestjs/mapped-types';
import { CreateEstacioneDto } from './create-estacione.dto.js';

export class UpdateEstacioneDto extends PartialType(CreateEstacioneDto) {}
