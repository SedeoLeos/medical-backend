import { Test, TestingModule } from '@nestjs/testing';
import { OrdonanceService } from './ordonance.service';

describe('OrdonanceService', () => {
  let service: OrdonanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdonanceService],
    }).compile();

    service = module.get<OrdonanceService>(OrdonanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
