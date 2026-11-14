import { Module } from '@nestjs/common';
import { EstacionesService } from './estaciones.service.js';
import { EstacionesController } from './estaciones.controller.js';

@Module({
  controllers: [EstacionesController],
  providers: [EstacionesService],
})
export class EstacionesModule {}
