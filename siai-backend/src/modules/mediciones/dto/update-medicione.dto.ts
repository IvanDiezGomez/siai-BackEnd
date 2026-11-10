import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicioneDto } from './create-medicione.dto.js';

export class UpdateMedicioneDto extends PartialType(CreateMedicioneDto) {}
