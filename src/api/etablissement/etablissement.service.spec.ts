import { Test, TestingModule } from '@nestjs/testing';
import { EtablissementService } from './etablissement.service';

describe('EtablissementService', () => {
  let service: EtablissementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtablissementService],
    }).compile();

    service = module.get<EtablissementService>(EtablissementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
