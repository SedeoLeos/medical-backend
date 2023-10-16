import { Test, TestingModule } from '@nestjs/testing';
import { ChirugieService } from './chirugie.service';

describe('ChirugieService', () => {
  let service: ChirugieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChirugieService],
    }).compile();

    service = module.get<ChirugieService>(ChirugieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
