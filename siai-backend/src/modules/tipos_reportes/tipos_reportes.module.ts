import { Module } from '@nestjs/common';
import { TiposReportesService } from './tipos_reportes.service.js';
import { TiposReportesController } from './tipos_reportes.controller.js';

@Module({
  controllers: [TiposReportesController],
  providers: [TiposReportesService],
})
export class TiposReportesModule {}
