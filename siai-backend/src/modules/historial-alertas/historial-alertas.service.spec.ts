import { Test, TestingModule } from '@nestjs/testing';
import { HistorialAlertasService } from './historial-alertas.service.js';

describe('HistorialAlertasService', () => {
  let service: HistorialAlertasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialAlertasService],
    }).compile();

    service = module.get<HistorialAlertasService>(HistorialAlertasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
