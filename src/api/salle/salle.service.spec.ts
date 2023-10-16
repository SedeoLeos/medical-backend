import { Test, TestingModule } from '@nestjs/testing';
import { SalleService } from './salle.service';

describe('SalleService', () => {
  let service: SalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalleService],
    }).compile();

    service = module.get<SalleService>(SalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
