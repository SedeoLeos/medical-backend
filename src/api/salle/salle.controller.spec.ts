import { Test, TestingModule } from '@nestjs/testing';
import { SalleController } from './salle.controller';
import { SalleService } from './salle.service';

describe('SalleController', () => {
  let controller: SalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalleController],
      providers: [SalleService],
    }).compile();

    controller = module.get<SalleController>(SalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
