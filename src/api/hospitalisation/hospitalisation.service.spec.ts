import { Test, TestingModule } from '@nestjs/testing';
import { HospitalisationService } from './hospitalisation.service';

describe('HospitalisationService', () => {
  let service: HospitalisationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HospitalisationService],
    }).compile();

    service = module.get<HospitalisationService>(HospitalisationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
