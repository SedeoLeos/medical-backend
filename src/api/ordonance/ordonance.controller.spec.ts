import { Test, TestingModule } from '@nestjs/testing';
import { OrdonanceController } from './ordonance.controller';
import { OrdonanceService } from './ordonance.service';

describe('OrdonanceController', () => {
  let controller: OrdonanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdonanceController],
      providers: [OrdonanceService],
    }).compile();

    controller = module.get<OrdonanceController>(OrdonanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
