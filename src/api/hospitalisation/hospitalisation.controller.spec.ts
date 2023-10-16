import { Test, TestingModule } from '@nestjs/testing';
import { HospitalisationController } from './hospitalisation.controller';
import { HospitalisationService } from './hospitalisation.service';

describe('HospitalisationController', () => {
  let controller: HospitalisationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitalisationController],
      providers: [HospitalisationService],
    }).compile();

    controller = module.get<HospitalisationController>(HospitalisationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
