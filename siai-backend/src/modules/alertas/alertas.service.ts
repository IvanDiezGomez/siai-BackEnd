import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateAlertaDto } from './dto/create-alerta.dto.js';
import { UpdateAlertaDto } from './dto/update-alerta.dto.js';

@Injectable()
export class AlertasService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAlertaDto: CreateAlertaDto) {
    const { fecha_hora, ...data } = createAlertaDto;
    return this.prisma.alertas.create({
      data: {
        ...data,
        ...(fecha_hora ? { fecha_hora: new Date(fecha_hora) } : {}),
      },
    });
  }

  findAll() {
    return this.prisma.alertas.findMany({
      orderBy: { id_alerta: 'desc' },
    });
  }

  async findOne(id: number) {
    const alerta = await this.prisma.alertas.findUnique({
      where: { id_alerta: id },
    });
    if (!alerta) {
      throw new NotFoundException(`Alerta #${id} no encontrada`);
    }
    return alerta;
  }

  async update(id: number, updateAlertaDto: UpdateAlertaDto) {
    await this.findOne(id);
    const { fecha_hora, ...data } = updateAlertaDto;
    return this.prisma.alertas.update({
      where: { id_alerta: id },
      data: {
        ...data,
        ...(fecha_hora ? { fecha_hora: new Date(fecha_hora) } : {}),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.alertas.delete({
      where: { id_alerta: id },
    });
  }
}
