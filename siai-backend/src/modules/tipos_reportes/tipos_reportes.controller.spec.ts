import { Test, TestingModule } from '@nestjs/testing';
import { TiposReportesController } from './tipos_reportes.controller.js';
import { TiposReportesService } from './tipos_reportes.service.js';

describe('TiposReportesController', () => {
  let controller: TiposReportesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposReportesController],
      providers: [TiposReportesService],
    }).compile();

    controller = module.get<TiposReportesController>(TiposReportesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
