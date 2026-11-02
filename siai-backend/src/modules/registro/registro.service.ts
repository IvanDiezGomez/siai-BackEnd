import { Injectable } from '@nestjs/common';
import { CreateRegistroDto } from './dto/create-registro.dto.js';
import { UpdateRegistroDto } from './dto/update-registro.dto.js';

@Injectable()
export class RegistroService {
  create(createRegistroDto: CreateRegistroDto) {
    return 'This action adds a new registro';
  }

  findAll() {
    return `This action returns all registro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registro`;
  }

  update(id: number, updateRegistroDto: UpdateRegistroDto) {
    return `This action updates a #${id} registro`;
  }

  remove(id: number) {
    return `This action removes a #${id} registro`;
  }
}
