import { Injectable } from '@nestjs/common';
import { CreateEstacioneDto } from './dto/create-estacione.dto.js';
import { UpdateEstacioneDto } from './dto/update-estacione.dto.js';

@Injectable()
export class EstacionesService {
  create(createEstacioneDto: CreateEstacioneDto) {
    return 'This action adds a new estacione';
  }

  findAll() {
    return `This action returns all estaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estacione`;
  }

  update(id: number, updateEstacioneDto: UpdateEstacioneDto) {
    return `This action updates a #${id} estacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} estacione`;
  }
}
