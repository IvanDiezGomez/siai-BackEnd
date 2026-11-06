import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposReportesService } from './tipos_reportes.service.js';
import { CreateTiposReporteDto } from './dto/create-tipos_reporte.dto.js';
import { UpdateTiposReporteDto } from './dto/update-tipos_reporte.dto.js';

@Controller('tipos-reportes')
export class TiposReportesController {
  constructor(private readonly tiposReportesService: TiposReportesService) {}

  @Post()
  create(@Body() createTiposReporteDto: CreateTiposReporteDto) {
    return this.tiposReportesService.create(createTiposReporteDto);
  }

  @Get()
  findAll() {
    return this.tiposReportesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposReportesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiposReporteDto: UpdateTiposReporteDto) {
    return this.tiposReportesService.update(+id, updateTiposReporteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposReportesService.remove(+id);
  }
}
