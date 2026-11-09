import { Module } from '@nestjs/common';
import { HistorialAlertasController } from './historial-alertas.controller.js';
import { HistorialAlertasService } from './historial-alertas.service.js';

@Module({
  controllers: [HistorialAlertasController],
  providers: [HistorialAlertasService]
})
export class HistorialAlertasModule {}
