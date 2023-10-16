import { Test, TestingModule } from '@nestjs/testing';
import { EtablissementController } from './etablissement.controller';
import { EtablissementService } from './etablissement.service';

describe('EtablissementController', () => {
  let controller: EtablissementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtablissementController],
      providers: [EtablissementService],
    }).compile();

    controller = module.get<EtablissementController>(EtablissementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
