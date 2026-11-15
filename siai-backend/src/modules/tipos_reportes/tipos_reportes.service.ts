import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateTiposReporteDto } from './dto/create-tipos_reporte.dto.js';
import { UpdateTiposReporteDto } from './dto/update-tipos_reporte.dto.js';

@Injectable()
export class TiposReportesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTiposReporteDto: CreateTiposReporteDto) {
    return this.prisma.tipos_reportes.create({ data: createTiposReporteDto });
  }

  findAll() {
    return this.prisma.tipos_reportes.findMany({
      orderBy: { id_tipo_reporte: 'desc' },
    });
  }

  async findOne(id: number) {
    const tipo = await this.prisma.tipos_reportes.findUnique({
      where: { id_tipo_reporte: id },
    });
    if (!tipo) {
      throw new NotFoundException(`Tipo de reporte #${id} no encontrado`);
    }
    return tipo;
  }

  async update(id: number, updateTiposReporteDto: UpdateTiposReporteDto) {
    await this.findOne(id);
    return this.prisma.tipos_reportes.update({
      where: { id_tipo_reporte: id },
      data: updateTiposReporteDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.tipos_reportes.delete({
      where: { id_tipo_reporte: id },
    });
  }
}
