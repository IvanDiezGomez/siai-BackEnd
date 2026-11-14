import { Test, TestingModule } from '@nestjs/testing';
import { EstacionesController } from './estaciones.controller.js';
import { EstacionesService } from './estaciones.service.js';

describe('EstacionesController', () => {
  let controller: EstacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstacionesController],
      providers: [EstacionesService],
    }).compile();

    controller = module.get<EstacionesController>(EstacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
