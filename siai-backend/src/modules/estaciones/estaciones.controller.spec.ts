import { Test, TestingModule } from '@nestjs/testing';
import { EstacionesController } from './estaciones.controller';
import { EstacionesService } from './estaciones.service';

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
