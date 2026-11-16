import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateHistorialAlertaDto } from './dto/create-historial-alerta.dto.js';
import { UpdateHistorialAlertaDto } from './dto/update-historial-alerta.dto.js';
import { HistorialAlertasService } from './historial-alertas.service.js';

@Controller('historial-alertas')
export class HistorialAlertasController {
  constructor(
    private readonly historialAlertasService: HistorialAlertasService,
  ) {}

  @Post()
  create(@Body() createHistorialAlertaDto: CreateHistorialAlertaDto) {
    return this.historialAlertasService.create(createHistorialAlertaDto);
  }

  @Get()
  findAll() {
    return this.historialAlertasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.historialAlertasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHistorialAlertaDto: UpdateHistorialAlertaDto,
  ) {
    return this.historialAlertasService.update(id, updateHistorialAlertaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.historialAlertasService.remove(id);
  }
}
