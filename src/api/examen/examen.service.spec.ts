import { Test, TestingModule } from '@nestjs/testing';
import { ExamenService } from './examen.service';

describe('ExamenService', () => {
  let service: ExamenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamenService],
    }).compile();

    service = module.get<ExamenService>(ExamenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
