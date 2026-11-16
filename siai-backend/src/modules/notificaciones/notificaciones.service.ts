import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateNotificacionDto } from './dto/create-notificacion.dto.js';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto.js';

@Injectable()
export class NotificacionesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createNotificacionDto: CreateNotificacionDto) {
    const { fecha_hora, ...data } = createNotificacionDto;
    return this.prisma.notificaciones.create({
      data: {
        ...data,
        ...(fecha_hora ? { fecha_hora: new Date(fecha_hora) } : {}),
      },
    });
  }

  findAll() {
    return this.prisma.notificaciones.findMany({
      orderBy: { id_notificacion: 'desc' },
    });
  }

  async findOne(id: number) {
    const item = await this.prisma.notificaciones.findUnique({
      where: { id_notificacion: id },
    });
    if (!item) {
      throw new NotFoundException(`Notificación #${id} no encontrada`);
    }
    return item;
  }

  async update(id: number, updateNotificacionDto: UpdateNotificacionDto) {
    await this.findOne(id);
    const { fecha_hora, ...data } = updateNotificacionDto;
    return this.prisma.notificaciones.update({
      where: { id_notificacion: id },
      data: {
        ...data,
        ...(fecha_hora ? { fecha_hora: new Date(fecha_hora) } : {}),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.notificaciones.delete({
      where: { id_notificacion: id },
    });
  }
}
