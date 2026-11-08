import { Test, TestingModule } from '@nestjs/testing';
import { TiposReportesService } from './tipos_reportes.service.js';

describe('TiposReportesService', () => {
  let service: TiposReportesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposReportesService],
    }).compile();

    service = module.get<TiposReportesService>(TiposReportesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
