import { Test, TestingModule } from '@nestjs/testing';
import { ConsultationController } from './consultation.controller';
import { ConsultationService } from './consultation.service';

describe('ConsultationController', () => {
  let controller: ConsultationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsultationController],
      providers: [ConsultationService],
    }).compile();

    controller = module.get<ConsultationController>(ConsultationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
