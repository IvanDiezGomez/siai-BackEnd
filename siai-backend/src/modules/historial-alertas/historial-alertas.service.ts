import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateHistorialAlertaDto } from './dto/create-historial-alerta.dto.js';
import { UpdateHistorialAlertaDto } from './dto/update-historial-alerta.dto.js';

@Injectable()
export class HistorialAlertasService {
  constructor(private readonly prisma: PrismaService) {}

  create(createHistorialAlertaDto: CreateHistorialAlertaDto) {
    const { fecha_hora, ...data } = createHistorialAlertaDto;
    return this.prisma.historial_alertas.create({
      data: {
        ...data,
        ...(fecha_hora ? { fecha_hora: new Date(fecha_hora) } : {}),
      },
    });
  }

  findAll() {
    return this.prisma.historial_alertas.findMany({
      orderBy: { id_historial: 'desc' },
    });
  }

  async findOne(id: number) {
    const item = await this.prisma.historial_alertas.findUnique({
      where: { id_historial: id },
    });
    if (!item) {
      throw new NotFoundException(`Historial de alerta #${id} no encontrado`);
    }
    return item;
  }

  async update(id: number, updateHistorialAlertaDto: UpdateHistorialAlertaDto) {
    await this.findOne(id);
    const { fecha_hora, ...data } = updateHistorialAlertaDto;
    return this.prisma.historial_alertas.update({
      where: { id_historial: id },
      data: {
        ...data,
        ...(fecha_hora ? { fecha_hora: new Date(fecha_hora) } : {}),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.historial_alertas.delete({
      where: { id_historial: id },
    });
  }
}
