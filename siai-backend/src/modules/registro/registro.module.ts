import { Module } from '@nestjs/common';
import { RegistroService } from './registro.service.js';
import { RegistroController } from './registro.controller.js';

@Module({
  controllers: [RegistroController],
  providers: [RegistroService],
})
export class RegistroModule {}
