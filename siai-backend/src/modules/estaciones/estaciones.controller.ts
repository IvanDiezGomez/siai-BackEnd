import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EstacionesService } from './estaciones.service.js';
import { CreateEstacioneDto } from './dto/create-estacione.dto.js';
import { UpdateEstacioneDto } from './dto/update-estacione.dto.js';

@Controller('estaciones')
export class EstacionesController {
  constructor(private readonly estacionesService: EstacionesService) {}

  @Post()
  create(@Body() createEstacioneDto: CreateEstacioneDto) {
    return this.estacionesService.create(createEstacioneDto);
  }

  @Get()
  findAll() {
    return this.estacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estacionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateEstacioneDto: UpdateEstacioneDto) {
    return this.estacionesService.update(id, updateEstacioneDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.estacionesService.remove(id);
  }
}
