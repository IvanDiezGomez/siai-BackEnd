import { Test, TestingModule } from '@nestjs/testing';
import { MedicionesController } from './mediciones.controller.js';
import { MedicionesService } from './mediciones.service.js';

describe('MedicionesController', () => {
  let controller: MedicionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicionesController],
      providers: [MedicionesService],
    }).compile();

    controller = module.get<MedicionesController>(MedicionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
