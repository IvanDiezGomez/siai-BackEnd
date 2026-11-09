import { Test, TestingModule } from '@nestjs/testing';
import { HistorialAlertasController } from './historial-alertas.controller.js';

describe('HistorialAlertasController', () => {
  let controller: HistorialAlertasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialAlertasController],
    }).compile();

    controller = module.get<HistorialAlertasController>(HistorialAlertasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
