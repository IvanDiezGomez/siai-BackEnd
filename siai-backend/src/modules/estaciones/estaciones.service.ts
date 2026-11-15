import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateEstacioneDto } from './dto/create-estacione.dto.js';
import { UpdateEstacioneDto } from './dto/update-estacione.dto.js';

@Injectable()
export class EstacionesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEstacioneDto: CreateEstacioneDto) {
    const { fecha_instalacion, ...data } = createEstacioneDto;
    return this.prisma.estaciones.create({
      data: {
        ...data,
        ...(fecha_instalacion ? { fecha_instalacion: new Date(fecha_instalacion) } : {}),
      },
    });
  }

  findAll() {
    return this.prisma.estaciones.findMany({
      orderBy: { id_estacion: 'desc' },
    });
  }

  async findOne(id: number) {
    const estacion = await this.prisma.estaciones.findUnique({
      where: { id_estacion: id },
    });
    if (!estacion) {
      throw new NotFoundException(`Estación #${id} no encontrada`);
    }
    return estacion;
  }

  async update(id: number, updateEstacioneDto: UpdateEstacioneDto) {
    await this.findOne(id);
    const { fecha_instalacion, ...data } = updateEstacioneDto;
    return this.prisma.estaciones.update({
      where: { id_estacion: id },
      data: {
        ...data,
        ...(fecha_instalacion ? { fecha_instalacion: new Date(fecha_instalacion) } : {}),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.estaciones.delete({
      where: { id_estacion: id },
    });
  }
}
