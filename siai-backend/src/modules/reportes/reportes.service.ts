import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateReporteDto } from './dto/create-reporte.dto.js';
import { UpdateReporteDto } from './dto/update-reporte.dto.js';

@Injectable()
export class ReportesService {
  constructor(private readonly prisma: PrismaService) {}

  private toDate(value?: string) {
    return value ? new Date(value) : undefined;
  }

  create(createReporteDto: CreateReporteDto) {
    const { fecha_desde, fecha_hasta, fecha_generacion, ...data } = createReporteDto;
    return this.prisma.reportes.create({
      data: {
        ...data,
        ...(fecha_desde ? { fecha_desde: this.toDate(fecha_desde) } : {}),
        ...(fecha_hasta ? { fecha_hasta: this.toDate(fecha_hasta) } : {}),
        ...(fecha_generacion ? { fecha_generacion: this.toDate(fecha_generacion) } : {}),
      },
    });
  }

  findAll() {
    return this.prisma.reportes.findMany({
      orderBy: { id_reporte: 'desc' },
    });
  }

  async findOne(id: number) {
    const reporte = await this.prisma.reportes.findUnique({
      where: { id_reporte: id },
    });
    if (!reporte) {
      throw new NotFoundException(`Reporte #${id} no encontrado`);
    }
    return reporte;
  }

  async update(id: number, updateReporteDto: UpdateReporteDto) {
    await this.findOne(id);
    const { fecha_desde, fecha_hasta, fecha_generacion, ...data } = updateReporteDto;
    return this.prisma.reportes.update({
      where: { id_reporte: id },
      data: {
        ...data,
        ...(fecha_desde ? { fecha_desde: this.toDate(fecha_desde) } : {}),
        ...(fecha_hasta ? { fecha_hasta: this.toDate(fecha_hasta) } : {}),
        ...(fecha_generacion ? { fecha_generacion: this.toDate(fecha_generacion) } : {}),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.reportes.delete({
      where: { id_reporte: id },
    });
  }
}
