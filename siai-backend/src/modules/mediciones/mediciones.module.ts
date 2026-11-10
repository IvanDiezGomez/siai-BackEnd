import { Module } from '@nestjs/common';
import { MedicionesService } from './mediciones.service.js';
import { MedicionesController } from './mediciones.controller.js';

@Module({
  controllers: [MedicionesController],
  providers: [MedicionesService],
})
export class MedicionesModule {}
