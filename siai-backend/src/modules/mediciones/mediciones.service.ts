import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateMedicioneDto } from './dto/create-medicione.dto.js';
import { UpdateMedicioneDto } from './dto/update-medicione.dto.js';

@Injectable()
export class MedicionesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMedicioneDto: CreateMedicioneDto) {
    const { fecha_hora, ...data } = createMedicioneDto;
    return this.prisma.mediciones.create({
      data: {
        ...data,
        ...(fecha_hora ? { fecha_hora: new Date(fecha_hora) } : {}),
      },
    });
  }

  findAll() {
    return this.prisma.mediciones.findMany({
      orderBy: { id_medicion: 'desc' },
    });
  }

  async findOne(id: number) {
    const medicion = await this.prisma.mediciones.findUnique({
      where: { id_medicion: id },
    });
    if (!medicion) {
      throw new NotFoundException(`Medición #${id} no encontrada`);
    }
    return medicion;
  }

  async update(id: number, updateMedicioneDto: UpdateMedicioneDto) {
    await this.findOne(id);
    const { fecha_hora, ...data } = updateMedicioneDto;
    return this.prisma.mediciones.update({
      where: { id_medicion: id },
      data: {
        ...data,
        ...(fecha_hora ? { fecha_hora: new Date(fecha_hora) } : {}),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.mediciones.delete({
      where: { id_medicion: id },
    });
  }
}
