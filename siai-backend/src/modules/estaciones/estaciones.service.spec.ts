import { Test, TestingModule } from '@nestjs/testing';
import { EstacionesService } from './estaciones.service';

describe('EstacionesService', () => {
  let service: EstacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstacionesService],
    }).compile();

    service = module.get<EstacionesService>(EstacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
