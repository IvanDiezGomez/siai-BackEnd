import { Injectable } from '@nestjs/common';
import { CreateTiposReporteDto } from './dto/create-tipos_reporte.dto.js';
import { UpdateTiposReporteDto } from './dto/update-tipos_reporte.dto.js';

@Injectable()
export class TiposReportesService {
  create(createTiposReporteDto: CreateTiposReporteDto) {
    return 'This action adds a new tiposReporte';
  }

  findAll() {
    return `This action returns all tiposReportes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiposReporte`;
  }

  update(id: number, updateTiposReporteDto: UpdateTiposReporteDto) {
    return `This action updates a #${id} tiposReporte`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposReporte`;
  }
}
